import {Navigate, useRoutes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MenuPage from "./pages/MenuPage.jsx";
import AboutMePage from "./pages/AboutMePage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import {ConfigProvider} from "antd";
import PathVariable, {Color} from "./enum.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import SignInForm from "./components/SignInForm.jsx";
import {useTheme} from "./hook/UseTheme.jsx";
import {useAuth} from "./hook/UseAuth.jsx";
import {ProfileLayout} from "./layout/ProfileLayout.jsx";
import {Profile} from "./components/Profile.jsx";
import {Cart} from "./components/Cart.jsx";

function App() {
    const {theme, setTheme} = useTheme();
    const {token} = useAuth();

    const PrivateRoute = ({ children }) => {
        return token ? children : <Navigate to={PathVariable.SIGN_IN} replace />;
    };

    const routes = useRoutes([
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {path: PathVariable.HOME_PAGE, element: <HomePage/>},
                {path: PathVariable.MENU, element: <MenuPage/>},
                {path: PathVariable.ABOUT_ME, element: <AboutMePage/>},
                {path: PathVariable.NEWS, element: <NewsPage/>},
                {path: PathVariable.ORDER, element: <PrivateRoute><OrderPage/></PrivateRoute>},
                {path: PathVariable.SIGN_UP, element: <SignUpForm/>},
                {path: PathVariable.SIGN_IN, element: <SignInForm/>},
                {path: PathVariable.CART, element: <PrivateRoute><Cart/></PrivateRoute>},
            ],
        },
        {
            path: PathVariable.USER_PROFILE,
            element: <PrivateRoute><ProfileLayout/></PrivateRoute>,
            children: [
                {path: PathVariable.PROFILE, element: <Profile/>},
                {path: PathVariable.SETTING_ADDRESS, element: <Profile/>},
            ]
        },
        {path: "*", element: <h1>404 Not Found</h1>},
    ])
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: Color,
                    },
                }}
            >
                {routes}
                <div className={"fixed z-50 h-15 w-15 cursor-pointer bottom-4 border-2 right-4"}
                     style={{borderRadius: "50%"}}
                     onClick={() => {
                         setTheme(theme === "light" ? "dark" : "light")
                     }}>
                    <img src="../public/dark-mode.png" alt=""/>
                </div>
            </ConfigProvider>
        </>
    )
}

export default App
