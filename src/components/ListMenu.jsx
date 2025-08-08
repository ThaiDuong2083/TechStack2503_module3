import React, {useEffect, useRef, useState} from "react";
import { getPageProduct } from "../service/productService.js";
import { addItemToCart } from "../service/cartService.js"
import {Card, ConfigProvider, Input, Pagination} from "antd";
import {FileTextOutlined, ShoppingCartOutlined, StarFilled} from "@ant-design/icons";
import PathVariable from "../enum.jsx";
import {calculateDiscountPrice, decodeToken} from "../service/functionService.js";
import {useCart} from "../hook/UseCart.jsx";
import {toast, ToastContainer} from "react-toastify";
import { ConfigTheme } from '../theme/ConfigTheme.jsx';
import { Link, Outlet } from "react-router-dom";

export const ListMenu = ({currentTheme})=>{
    const [limit, setLimit] = useState(8)
    const skip = useRef(0)
    const [currentPage, setCurrentPage] = useState(1)
    const total = useRef(0)
    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const {fetchCountCart} = useCart()

    const notify = (msg) => toast.success(msg,{
        theme: currentTheme,
    });


    useEffect(() => {
        const fetchProduct = async (limit, skip) => {
            try {
                skip.current = (currentPage - 1) * limit
                const data = await getPageProduct(limit, skip.current, name)
                setProducts(data.products)
                total.current = data.total
            } catch (err) {
                console.log(err);
            }
        }

        fetchProduct(limit, skip);
    }, [limit, currentPage, name])

    const handleAddtoCart = async ({productId, price, discountPrice}) => {
        const user = decodeToken();
        if (user === null) {
            location.href = PathVariable.SIGN_IN
        }
        let item = {
            id: null,
            quantity: 1,
            price: price,
            discountPrice: discountPrice,
            product: {
                id: productId
            }
        }
        const response = await addItemToCart(item, user.id)
        notify(response.msg)
        fetchCountCart()
    }

    return (
        <>
            <ToastContainer />
            <ConfigTheme>
                <Input.Search variant="filled" value={name} placeholder="Tìm kiếm theo tên"
                              onChange={(e) => setName(e.target.value)}/>
            </ConfigTheme>
            <div className={"my-10 flex gap-10 flex-wrap"}>
                {products.map(product => (
                    <ConfigTheme>
                        <Card
                            hoverable
                            key={product.id}
                            cover={<img alt={product.name} src={product.thumbnail}/>}
                            className={"w-75"}
                        >
                            <h1 className={"font-bold text-lg"}>{product.title}</h1>
                            <div className={"text-base flex gap-10"}>
                            <span className={"font-semibold"}>
                                ${(calculateDiscountPrice(product.price, product.discountPercentage))}
                            </span>
                                <span className={"line-through"}> ${product.price} </span>
                            </div>
                            <div className={"text-base flex justify-between"}>
                                <span>Số lượng: {product.stock}</span>
                                <span>{product.rating} <StarFilled className={"!text-yellow-300"}/></span>
                            </div>
                            <span
                                onClick={() => {
                                    handleAddtoCart({
                                        productId: product.id,
                                        price: product.price,
                                        discountPrice: (calculateDiscountPrice(product.price, product.discountPercentage))
                                    })}
                                }
                                className={"block text-base"}><ShoppingCartOutlined /> Thêm vào giỏ hàng</span>
                            
                            <Link to={PathVariable.MENU+"/"+product.id} className={`${currentTheme === "dark" ? "!text-white" : "!text-black"} text-base`}>
                                <FileTextOutlined /> Chi tiết</Link>
                                
                        </Card>
                    </ConfigTheme>
                ))}
            </div>
            <ConfigTheme>
                <Pagination
                    align="center"
                    current={currentPage}
                    pageSize={limit}
                    total={total.current}
                    onChange={(page, pageSize) => {
                        setCurrentPage(page)
                        setLimit(pageSize)
                    }}
                />
            </ConfigTheme>
        </>
    )
}