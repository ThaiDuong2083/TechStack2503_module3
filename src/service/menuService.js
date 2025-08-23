import { getUserData } from "./authService"

const MENU_URL = "http://localhost:8080/api/v1/list-menu"

export const getAllMenuService = async (userId) => {
    getUserData()
    let param = new URLSearchParams({ userId: userId })
    return await fetch(MENU_URL+"/get-all" + '?' + param)
        .then(res => res.json())
}

export const getAllNameAndIdMenuService = async (userId) => {
    getUserData()
    let param = new URLSearchParams({ userId: userId })
    return await fetch(MENU_URL + "/get-all-name-id" + '?' + param)
        .then(res => res.json())
}


export const getDetailMenuService = async (id) => {
    getUserData()
    let param = new URLSearchParams({ id: id })
    return await fetch(MENU_URL + "" + '?' + param)
        .then(res => res.json())
}

export const createOrUpdateMenu = async (menu) => {
    getUserData()
    return await fetch(MENU_URL, {
        method: menu.id ===  undefined ? "POST" : "PUT" ,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(menu)
    })
        .then(res => res.json())
};