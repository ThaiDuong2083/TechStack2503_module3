import {useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";

export const useCart = ()=>{
    const {fetchCountCart, countItem} = useContext(CartContext);
    return {fetchCountCart, countItem};
}