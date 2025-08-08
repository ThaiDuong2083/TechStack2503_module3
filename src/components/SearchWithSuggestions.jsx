import { Input } from "antd";
import { useState, useEffect } from "react";
import { getPageProduct } from "../service/productService";
import PathVariable from "../enum";


export const SearchWithSuggestions = () => {
    const { Search } = Input;
    const [value, setValue] = useState("");
    const [visible, setVisible] = useState(false);
    const [searchProducts, setSearchProduct] = useState([
        {
            id: 0,
            name: "",
            price: 0,
            image: "",
        }
    ])

    const getProducts = async (value) => {
        const res = await getPageProduct(5, 0, value);
        let productArr = []
        res.products.forEach(product => {
            productArr.push({
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.thumbnail,
                discountPercentage: product.discountPercentage
            })
        })
        setSearchProduct(productArr)
        setVisible(value.trim() !== "");
    }

    useEffect(() => {
        getProducts(value)
    }, [value]);

    const handleChooseProduct = (id) => {
        window.location.href = PathVariable.MENU + "/" + id
    }

    return (
        <>
            <Search placeholder="Tìm kiếm món ăn"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => {
                    if (value.trim() !== "") setVisible(true);
                }}
                onBlur={() => setTimeout(() => setVisible(false), 200)}
                style={{ width: 500 }} />

            {visible && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b z-50 max-h-[400px] overflow-auto">
                    {searchProducts.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-3 px-4 py-3 border-b hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleChooseProduct(item.id)}
                        >
                            <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-red-600 font-bold text-sm">
                                        ${(item.price - item.price * item.discountPercentage /100).toFixed(2)}
                                    </span>
                                    <span className="line-through text-gray-400 text-xs">
                                        {item.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
