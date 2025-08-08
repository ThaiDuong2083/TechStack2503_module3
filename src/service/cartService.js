import { getUserData } from './authService';

const CART_URL = "http://localhost:8080/api/v1/cart"

export const getCartByUser = async (userId) => {
    getUserData()
    let param = new URLSearchParams({ userId: userId })
    return await fetch(CART_URL + '?' + param)
        .then(res => res.json())
};

export const addItemToCart = async (userId, item) => {
    getUserData()
    return await fetch(CART_URL + '/' + userId, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    })
        .then(res => res.json())
};

export const deleteItemFromCart = async (itemId, userId) => {
    getUserData()
    return await fetch(CART_URL + '/' + itemId + '/' + userId, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json())
};

export const updateQuantityItem = async (userId, item) => {
    getUserData()
    return await fetch(CART_URL + '/' + userId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    }).then(res => res.json())
};

export const countItemInCart = async (userId) => {
    getUserData()
    let param = new URLSearchParams({ userId: userId })
    return await fetch(CART_URL + "/count?" + param)
        .then(res => res.json())
};
