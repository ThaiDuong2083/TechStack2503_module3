const BASE_URL = "https://dummyjson.com/"
const CART_URL = "http://localhost:8080/api/v1/cart"

export const getUserData = async ()=>{
    return await fetch(BASE_URL+'auth/me', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+localStorage.getItem('token'),
        },
    }).then(res => res.json())
}

export const getPageProduct = async (limit, skip, q)=>{
    return await fetch(BASE_URL+`products/search?q=${q}&limit=${limit}&skip=${skip}`)
        .then(res => res.json())
}

export const getCartByUser = async (userId)=>{
    let param = new URLSearchParams({userId: userId})
    return await fetch(CART_URL+'?'+param)
        .then(res => res.json())
}

export const addItemToCart = async (item, userId)=>{
    return await fetch(CART_URL+'/'+userId, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
}

export const deleteItemFromCart = async (itemId,userId) => {
    return await fetch(CART_URL+'/'+itemId+'/'+userId, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json())
}

export const updateQuantityItem = async (userId, item) => {
    return await fetch(CART_URL+'/'+userId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    }).then(res => res.json())
}

export const countItemInCart = async (userId)=> {
    let param = new URLSearchParams({userId: userId})
    return await fetch(CART_URL+"/count?"+param)
        .then(res => res.json())
}