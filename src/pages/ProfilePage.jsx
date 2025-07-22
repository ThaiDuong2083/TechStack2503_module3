import {Col} from "antd";
import {useTheme} from "../hook/UseTheme.jsx";
import {MenuProfile} from "../components/MenuProfile.jsx";
import {WrapperTheme} from "../components/WrapperTheme.jsx";
import {Outlet} from "react-router-dom";

export const ProfilePage = () => {
    const {theme} = useTheme();
    return (
        <WrapperTheme className={`${theme === "dark" ? "" : "!bg-gray-200"} px-28 py-8`}>
            <div className={`${theme === "dark" ? "" : "bg-gray-200"} flex justify-between`}>
                <Col className={`${theme === "dark" ? "bg-black" : "bg-white"} pb-15`} span={5}>
                    <MenuProfile />
                </Col>
                <Col className={`${theme === "dark" ? "bg-black" : "bg-white"} pb-15`} span={18}>
                    <Outlet/>
                </Col>
            </div>
        </WrapperTheme>
    )
}