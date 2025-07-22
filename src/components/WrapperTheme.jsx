import {useTheme} from "../hook/UseTheme.jsx";

export const WrapperTheme = ({children,  className = ""}) => {
    const {theme} = useTheme();
    return <>
                <div className={`${className}`}
                     style={{
                         backgroundColor: `${theme === "dark" ? "#141414" : "white"}`,
                         color: `${theme === "dark" ? "white" : "black"}`,
                     }}>
                    {children}
                </div>
            </>
}