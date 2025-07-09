import {useRoutes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MenuPage from "./pages/MenuPage.jsx";
import AboutMePage from "./pages/AboutMePage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import {ConfigProvider} from "antd";
import PathVariable from "./enum.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import SignInForm from "./components/SignInForm.jsx";

function App() {
    const routes = useRoutes([
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {path: PathVariable.HOME_PAGE, element: <HomePage/>},
                {path: PathVariable.MENU, element: <MenuPage/>},
                {path: PathVariable.ABOUT_ME, element: <AboutMePage/>},
                {path: PathVariable.NEWS, element: <NewsPage/>},
                {path: PathVariable.ORDER, element: <OrderPage/>},
                {path: PathVariable.SIGN_UP, element: <SignUpForm/>},
                {path: PathVariable.SIGN_IN, element: <SignInForm/>},
            ],
        },
        { path: "*", element: <h1>404 Not Found</h1> },
    ])
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#d2691e', // Màu cam đất
                    },
                }}
            >
                {routes}
            </ConfigProvider>
        </>
    )
}

export default App
