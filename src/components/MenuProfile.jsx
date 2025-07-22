import {BorderOuterOutlined, FileOutlined, LogoutOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import PathVariable from "../enum.jsx";
import {useTheme} from "../hook/UseTheme.jsx";
import {UseUser} from "../hook/UseUser.jsx";

export const MenuProfile = () => {
    const menuItems = [
        {
            icon: <UserOutlined />,
            path: PathVariable.USER_PROFILE+"/"+PathVariable.PROFILE,
            title: "Thông tin cá nhân"
        },
        {
            icon: <BorderOuterOutlined />,
            path: PathVariable.USER_PROFILE+"/"+PathVariable.SETTING_ADDRESS,
            title: "Cài đặt địa chỉ"
        },
        {
            icon: <ShoppingCartOutlined />,
            path: PathVariable.USER_PROFILE+"/"+PathVariable.CART,
            title: "Quản lý đơn hàng"
        },
        {
            icon: <FileOutlined />,
            path: PathVariable.USER_PROFILE+"/"+PathVariable.COUPON,
            title: "Mã đã lưu"
        },
        {
            icon: <LogoutOutlined />,
            path: PathVariable.LOGOUT,
            title: "Đăng xuất"
        },
    ]

    const {userData} = UseUser();
    const {theme} = useTheme();
    const renderTextColor = ()=>{
        return theme === "dark" ? "!text-white" : "!text-gray-500"
    }

    return (
        <>
            <div className={"py-10 flex flex-col items-center"}>
                {/*<UserOutlined className={"text-7xl"}/>*/}
                <img src={userData.image} />
                <h1 className={"font-bold text-lg leading-12"}>{userData.firstName+" "+userData.lastName}</h1>
            </div>
            <div className={"flex flex-col"}>
                {menuItems.map((item, key) => (
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                            `relative pl-6 h-9 py-2 block ${
                                isActive ? '!text-orange-600' : renderTextColor()
                            }`
                        }
                        index={key}
                    >
                        {({ isActive }) => (
                            <>
                                {isActive && (
                                    <span className="absolute left-0 top-0 h-full w-1.5 bg-orange-600 rounded-r-lg"></span>
                                )}
                                {item.icon} {item.title}
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </>
    )
}