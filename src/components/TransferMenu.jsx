import { useEffect, useState } from 'react';
import { Flex, Table, Tag, Transfer, Image, Select, Button, Input } from 'antd';
import { ConfigTheme } from "../theme/ConfigTheme"
import { getPageProduct } from '../service/productService';
import { getDetailMenuService, getAllNameAndIdMenuService, createOrUpdateMenu } from '../service/menuService';
import { decodeToken, formatDate } from '../service/functionService';
import { toast, ToastContainer } from 'react-toastify';
import { useTheme } from '../hook/UseTheme';

export function TransferMenu() {
    const [targetKeys, setTargetKeys] = useState([]);
    const [products, setProducts] = useState([])
    const [idAndNameMenus, setIdAndNameMenus] = useState([])
    const [check, setCheck] = useState(false)
    const { theme } = useTheme()
    const [menu, setMenu] = useState({
        name: "Menu mới",
        items: {},
        totalPrice: 0,
        totalPriceDiscount: 0,
        userId: decodeToken().id,
        createdAt: formatDate()
    })
    const notify = (msg) => toast.success(msg, {
        theme: theme,
    });
    async function getAllProduct() {
        const res = await getPageProduct()
        let foods = []
        res.products.forEach(p => {
            foods.push({
                id: p.id,
                key: String(p.id),
                title: p.title,
                category: p.category,
                thumbnail: p.thumbnail,
                price: p.price,
                discountPercentage: p.discountPercentage
            })
        });
        setProducts(foods)
    }

    const setIdAndNameForMenuSearch = async () => {
        const res = await getAllNameAndIdMenuService(decodeToken().id)
        setIdAndNameMenus(
            res.data.map(item => ({ value: item.id, label: item.name }))
        );
    }

    useEffect(() => {
        getAllProduct()
        setIdAndNameForMenuSearch()
    }, [!check]);

    const columns = [
        {
            dataIndex: 'thumbnail',
            title: 'Ảnh',
            render: (thumbnail) => (
                <Image
                    width={50}
                    src={thumbnail}
                />
            )
        },
        { dataIndex: 'title', title: 'Tên' },
        {
            dataIndex: 'category',
            title: 'Danh mục',
            render: (tag) => (
                <Tag style={{ marginInlineEnd: 0 }} color="cyan">
                    {tag.toUpperCase()}
                </Tag>
            ),
        },
        {
            title: "Giá",
            render: (_, product) => (
                <>
                    <span>${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)} <span className={"line-through"}>{product.price}</span></span>
                </>
            ),
        }
    ];

    const searchMenu = async (id) => {
        const resMenu = await getDetailMenuService(id)
        setMenu(resMenu.data)
        setTargetKeys(resMenu.data.items.map((item) => String(item.product.id)));
    }
    const filterOption = (input, item) =>
        item.title?.includes(input) || item.tag?.includes(input);

    const leftColumns = columns;
    const rightColumns = columns;

    const setMenuFunction = (nextTargetKeys) => {
        setTargetKeys(nextTargetKeys)
        const selectedProducts = products.filter((p) => nextTargetKeys.includes(String(p.id)));
        const totalPrice = parseFloat((selectedProducts.reduce((sum, item) => sum + item.price, 0).toFixed(2)))
        const totalDiscountPrice = totalPrice - parseFloat((selectedProducts.reduce((sum, item) => sum + (item.price * item.discountPercentage / 100), 0).toFixed(2)))

        setMenu((prev) => ({
            ...prev,
            items: nextTargetKeys.map(item => ({ product: { id: parseInt(item) } })),
            totalPrice: totalPrice,
            totalPriceDiscount: totalDiscountPrice,
        }))
    }
    const handleCreateOrUpdate = async () => {
        const res = await createOrUpdateMenu(menu)
        console.log(res);
        if (res.code === 200) {
            setMenu(res.data)
            setCheck(prev => !prev)
            notify(res.msg)
        }
    }

    return (
        <>
            <ConfigTheme>
                <ToastContainer/>
                <Select
                    showSearch
                    style={{ width: '100%', marginBottom: "1%" }}
                    placeholder="Tìm kiếm menu"
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={idAndNameMenus}
                    onChange={(value) => searchMenu(value)}
                    size='large'
                />
                <Flex align="start" className='relative' gap="middle" vertical>
                    <div className='w-full text-center'>
                        <h1 className='font-semibold text-3xl mb-4'>
                            {menu.id === undefined ?
                                <Input
                                    style={{ width: "400px" }}
                                    onChange={(e) => setMenu((prev) => ({
                                        ...prev,
                                        name: e.target.value,

                                    }))}
                                    value={menu.name} />
                                :
                                menu.name + " " + menu.id
                            }
                        </h1>
                    </div>
                    <div className=' absolute'>
                        <Button type='primary' onClick={() => { handleCreateOrUpdate() }}>
                            {menu.id === undefined ? ("Tạo mới") : ("Cập nhật")}
                        </Button>
                    </div>

                    <p className='absolute right-0'>
                        <span className='font-semibold'>Giá dự kiến: </span>
                        <span>${menu.totalPriceDiscount.toLocaleString('vi-VN')}</span>
                        <span className='line-through ml-2'>{menu.totalPrice.toLocaleString('vi-VN')}</span>
                    </p>

                    <Transfer
                        style={{ width: '100%' }}
                        dataSource={products}
                        targetKeys={targetKeys}
                        showSearch
                        showSelectAll={false}
                        onChange={(nextTargetKeys, direction, moveKeys) => setMenuFunction(nextTargetKeys)}
                        filterOption={filterOption}
                    >
                        {({
                            direction,
                            filteredItems,
                            onItemSelect,
                            onItemSelectAll,
                            selectedKeys: listSelectedKeys,
                            disabled: listDisabled,
                        }) => {
                            const columns = direction === 'left' ? leftColumns : rightColumns;
                            const rowSelection = {
                                getCheckboxProps: () => ({ disabled: listDisabled }),
                                onChange(selectedRowKeys) {
                                    onItemSelectAll(selectedRowKeys, 'replace');
                                },
                                selectedRowKeys: listSelectedKeys,
                                selections: [
                                    Table.SELECTION_ALL,
                                    Table.SELECTION_INVERT,
                                    Table.SELECTION_NONE,
                                ],
                            };
                            return (
                                <Table
                                    rowSelection={rowSelection}
                                    columns={columns}
                                    dataSource={filteredItems}
                                    pagination={{ pageSize: 5 }}
                                    size="small"
                                    style={{ pointerEvents: listDisabled ? 'none' : undefined }}
                                    onRow={({ key, disabled: itemDisabled }) => ({
                                        onClick: () => {
                                            if (itemDisabled || listDisabled) return;
                                            onItemSelect(key, !listSelectedKeys.includes(key));
                                        },
                                    })}
                                />
                            );
                        }}
                    </Transfer>
                </Flex>
            </ConfigTheme>
        </>
    );
}
