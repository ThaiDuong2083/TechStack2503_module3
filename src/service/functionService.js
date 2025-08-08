import { jwtDecode } from "jwt-decode";

export const decodeToken = () => {
    const token = JSON.stringify(localStorage.getItem('token'));
    return token === "null" ? null : jwtDecode(token);
}

export const calculateDiscountPrice = (price, discountPercentage) => {
    return (price - (price * discountPercentage /100)).toFixed(2)
}