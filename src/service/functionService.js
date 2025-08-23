import { jwtDecode } from "jwt-decode";

export const decodeToken = () => {
    const token = JSON.stringify(localStorage.getItem('token'));
    return token === "null" ? null : jwtDecode(token);
}

export const calculateDiscountPrice = (price, discountPercentage) => {
    return (price - (price * discountPercentage /100)).toFixed(2)
}

export const formatDate = (date = new Date()) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
}