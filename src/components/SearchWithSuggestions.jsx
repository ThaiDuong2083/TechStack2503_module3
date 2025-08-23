import { Input, Modal } from "antd";
import { useState, useEffect } from "react";
import { getPageProduct } from "../service/productService";
import PathVariable from "../enum";


export const SearchWithSuggestions = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const { Search } = Input;
    const [value, setValue] = useState("");
    const [searchProducts, setSearchProduct] = useState([
        {
            id: 0,
            name: "",
            price: 0,
            image: "",
            category: "",
        }
    ])

    const getProducts = async (value) => {
        const res = await getPageProduct(null, 0, value);
        let productArr = []
        res.products.forEach(product => {
            productArr.push({
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.thumbnail,
                discountPercentage: product.discountPercentage,
                category: product.category
            })
        })
        setSearchProduct(productArr)
    }

    useEffect(() => {
        getProducts(value)
    }, [value]);

    const handleChooseProduct = (id) => {
        window.location.href = PathVariable.MENU + "/" + id
    }

    return (
        <>
            <Modal
                closable={false}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={800}
                footer={null}
            >
                <Search placeholder="Tìm kiếm món ăn"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => {
                        if (value.trim() !== "") setVisible(true);
                    }}
                    size="large"
                    className="rounded-bl-none rounded-br-none"
                />

                <div className="max-h-[400px] overflow-auto">
                    {searchProducts.length > 0 ? (
                        searchProducts.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between gap-4 px-5 py-4 border-b last:border-0 cursor-pointer transition"
                                onClick={() => handleChooseProduct(item.id)}
                            >
                                {/* Bên trái: hình + thông tin sản phẩm */}
                                <div className="flex gap-4 flex-1">
                                    <div className="relative">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-14 h-14 object-contain rounded-lg border"
                                        />
                                        {item.discountPercentage > 0 && (
                                            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full shadow-md">
                                                -{item.discountPercentage}%
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{item.name}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-red-600 font-bold text-sm">
                                                {(item.price - item.price * item.discountPercentage / 100).toLocaleString()}₫
                                            </span>
                                            {item.discountPercentage > 0 && (
                                                <span className="line-through text-gray-400 text-xs">
                                                    {item.price.toLocaleString()}₫
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-6 text-center">Không tìm thấy sản phẩm nào.</div>
                    )}
                </div>

            </Modal>
            <Search placeholder="Tìm kiếm món ăn"
                onClick={showModal}
                style={{ width: 200 }} />
        </>
    );
};
