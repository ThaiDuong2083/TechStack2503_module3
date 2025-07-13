import {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        if (!localStorage.getItem("themeConfig")){
            localStorage.setItem("themeConfig", "light");
        }else {
            if (theme !== ""){
                localStorage.setItem("themeConfig", theme);
            }
            setTheme(localStorage.getItem("themeConfig"));
        }
    }, [theme]);

    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;
}
