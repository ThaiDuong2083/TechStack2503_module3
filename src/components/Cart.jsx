import {WrapperTheme} from "./WrapperTheme.jsx";
import {useEffect, useState} from "react";
import {Button, ConfigProvider, Space, Table, theme} from "antd";
import {deleteItemFromCart, getCartByUser, updateQuantityItem} from "../route/Route.js";
import {decodeToken} from "../service/DecodeToken.jsx";
import {useTheme} from "../hook/UseTheme.jsx";
import {useCart} from "../hook/UseCart.jsx";

export const Cart = () => {
    const {theme: currentTheme} = useTheme();
    const [cart, setCart] = useState({});
    const [items, setItems] = useState([])
    const [isModifiedItem, setIsModifiedItem] = useState(false)
    const [subTotal, setSubTotal] = useState(0)
    const {fetchCountCart} = useCart();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getCartByUser(decodeToken().id);
            let itemsArr = [];
            setSubTotal(0)
            response.data.items.forEach((item) => {
                itemsArr.push({
                    key: item.key,
                    id: item.id,
                    productId: item.product.id,
                    thumbnail: item.product.thumbnail,
                    title: item.product.title,
                    quantity: item.quantity,
                    discountPrice: ({discountPrice: item.discountPrice, price: item.price}),
                    totalPriceProduct: (item.discountPrice * item.quantity).toFixed(2),
                    action: item.id,
                })
                setSubTotal(prevState => prevState + item.price * item.quantity)
            })

            setItems(itemsArr);
            setCart(response.data);
        }

        fetchData().then()
    }, [isModifiedItem]);

    const handleQuantityChange = async (id, newQuantity) => {
        let oldItem = items.find(item => item.id === id)
        let distanceQuantity = newQuantity - oldItem.quantity
        console.log(distanceQuantity)
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? {
                    ...item,
                    quantity: parseInt(newQuantity),
                    totalPriceProduct: (oldItem.discountPrice.discountPrice * newQuantity).toFixed(2),
                } : item
            )
        );

        setSubTotal(prevState => prevState + distanceQuantity * oldItem.discountPrice.price)
        setCart(prevState => ({
            ...prevState,
            total: prevState.total + distanceQuantity * oldItem.discountPrice.discountPrice,
        }));
        let newItem = {
            id: oldItem.id,
            quantity: newQuantity,
            price: oldItem.discountPrice.price,
            discountPrice: oldItem.discountPrice.discountPrice,
            product: {
                id: oldItem.productId
            }
        }
        updateQuantityItem(decodeToken().id, newItem).then();
    };

    const handleDeleteItem = async (id) => {
        if (confirm("Bạn muốn xóa món ăn này?")) {
            const response = await deleteItemFromCart(id, decodeToken().id);
            if (response.code === 200) {
                setIsModifiedItem(prevState => !prevState);
                fetchCountCart()
            }
        }
    }

    const columns = [
            {
                title: 'Id',
                dataIndex: 'id',
                key: 'id',
                render: text => <span>{text}</span>,
            },
            {
                title: 'Ảnh',
                dataIndex: 'thumbnail',
                key: 'thumbnail',
                render: url => <img className={"object-cover w-20 h-20"} src={url}/>,
            },
            {
                title: 'Tên',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: 'Số lượng',
                dataIndex: 'quantity',
                key: 'quantity',
                render: (quantity, record) =>
                    <input className={"w-13 border-1 border-black"}
                           type={"number"}
                           value={quantity}
                           min={1}
                           onChange={(e) =>
                               handleQuantityChange(record.id, Number(e.target.value))}/>
            },
            {
                title: 'Đơn giá',
                dataIndex: 'discountPrice',
                key: 'discountPrice',
                render: ({discountPrice, price}) => <span>{discountPrice} <span
                    className={"line-through ml-4"}> {price}</span></span>
            },
            {
                title: 'Tổng',
                dataIndex: 'totalPriceProduct',
                key: 'totalPriceProduct',
            },
            {
                title: 'Xóa',
                key: 'action',
                dataIndex: 'action',
                render: (id) => (
                    <Space size="middle">
                        <Button color={"danger"} variant={"solid"} onClick={() => handleDeleteItem(id)}>Delete</Button>
                    </Space>
                ),
            },
        ]
    ;

    return (
        <WrapperTheme>
            {items.length === 0 ? (
                    <h1 className={"text-center w-full p-17 font-semibold text-4xl"}>Giỏ hàng của bạn đang trống</h1>
                ) :
                (<>
                    <div className={"px-10"}>
                        <ConfigProvider
                            theme={{
                                algorithm: currentTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
                            }}
                        >
                            <Table columns={columns} dataSource={items} pagination={false}/>
                        </ConfigProvider>
                    </div>

                    <div className={"px-40 text-lg flex justify-end leading-8"}>
                        <div className={"flex gap-5"}>
                            <div className={"font-semibold"}>
                                <p>Tổng tiền: </p>
                                <p>Giảm giá: </p>
                                <p>Tổng thanh toán: </p>
                            </div>
                            <div>
                                <p>{subTotal.toFixed(2)}</p>
                                <p>{(subTotal - cart.total).toFixed(2)}</p>
                                <p>{cart.total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </WrapperTheme>
    )
}