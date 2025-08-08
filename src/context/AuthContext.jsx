import {createContext, useState} from "react";
import PathVariable from "../enum.jsx";
import { login as apiLogin } from "../service/authService.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    const login = async (username, password) =>{ 
        const res = await apiLogin(username, password); 
        res ? window.location.href = "/" : ""
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