import {createContext, useState} from "react";
import PathVariable from "../enum.jsx";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    const login = (username, password) => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                expiresInMins: 30, // optional, defaults to 60
            }),
        })
            .then(res => res.json())
            .then(data =>{
                setToken(data.accessToken)
                saveToken(data.accessToken)
                window.location.href = PathVariable.HOME_PAGE;
            })
        .catch(err => console.log(err));
    }

    const saveToken = (token) => {
        if (token) {
            localStorage.setItem("token", token);
        }else {
            localStorage.removeItem("token");
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        window.location.href = PathVariable.HOME_PAGE;
    }

    return (
        <AuthContext.Provider value={{token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}