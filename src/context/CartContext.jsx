import {createContext, useEffect, useState} from "react";
import {countItemInCart} from "../route/Route.js";
import {decodeToken} from "../service/DecodeToken.jsx";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [countItem, setCountItem] = useState(0)
    const fetchCountCart = async () => {
        const userData = decodeToken();
        try {
            const result = await countItemInCart(userData.id);
            setCountItem(result.code === 200 ? result.data : 0)
        } catch (error) {
            console.error( error);
        }
    };
    useEffect(() => {

        fetchCountCart().then();
    },  []);

    return <CartContext.Provider value={{fetchCountCart, countItem}}>{children}</CartContext.Provider>;
}
