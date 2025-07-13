import React from 'react';
import PathVariable from '../enum.jsx';
import {Button, Input, Layout, Menu, Dropdown, Space} from 'antd';
import {useLocation, useNavigate} from 'react-router-dom';
import '../assets/header.css';
import {UserOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import {WrapperTheme} from "./WrapperTheme.jsx";
import {useTheme} from "../hook/UseTheme.jsx";

const {Header} = Layout;
const {Search} = Input;

const menuItems = [
    {key: PathVariable.HOME_PAGE, label: 'Trang chủ'},
    {key: PathVariable.MENU, label: 'Thực đơn'},
    {key: PathVariable.ABOUT_ME, label: 'Về chúng tôi'},
    {key: PathVariable.NEWS, label: 'Tin tức'},
    {key: PathVariable.ORDER, label: 'Đặt tiệc ngay'},];

const items = [
        {
            label: (
                <a rel="noopener noreferrer" href={PathVariable.PROFILE}>
                    Thông tin cá nhân
                </a>
            ),
            key: '0',
        },
        {
            label: (
                <a rel="noopener noreferrer" href={PathVariable.SETTING_ADDRESS}>
                    Cài đặt địa chỉ
                </a>
            ),
            key: '1',
        },
        {
            label: (
                <a rel="noopener noreferrer" href={PathVariable.COUPON}>
                    Mã đã lưu
                </a>
            ),
            key: '2',
        },
        {
            label: (
                <a rel="noopener noreferrer" href={PathVariable.LOGOUT}>
                    Đăng xuất
                </a>
            ),
            key: '3',
        },];

const HeaderLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {theme} = useTheme()

    return (
        <WrapperTheme className="h-18 z-50 fixed top-0 w-screen ">
            <Header className={"w-11/12 flex justify-between m-auto !bg-transparent"}>
                <div className={"header-left"}>
                    <Menu
                        selectedKeys={[location.pathname]}
                        onClick={({key}) => navigate(key)}
                        className={"!bg-transparent"}
                        mode="horizontal"
                    >
                        {menuItems.map(item => (<Menu.Item
                            key={item.key}
                            className={`${theme === "dark" ? "text-color-white" : ""}
                                        ${location.pathname === item.key && item.key !== PathVariable.ORDER ? "custom-menu-item-active" : ""} 
                                        ${location.pathname === item.key && item.key === PathVariable.ORDER ? "custom-menu-btn-active" : ""}`}
                        >
                            {item.key === PathVariable.ORDER ? (<Button type="primary" className="custom-button">
                                {item.label}
                            </Button>) : (<span className="font-bold">{item.label}</span>)}
                        </Menu.Item>))}
                    </Menu>
                </div>
                <div className={"header-right flex items-center gap-5"}>
                    <div className={"flex items-center"}>
                        <Search placeholder="Tìm kiếm món ăn"  style={{width: 200}}/>
                    </div>
                    <div>
                        <Dropdown
                            menu={{items}}
                            overlayClassName={`${theme === "dark" ? "text-color-white" : "text-black"} bg-black`}
                        >
                            <a onClick={e => e.preventDefault()}>
                                <Space className={`${theme === "dark" ? "text-color-white" : "text-black"}`}>
                                    <UserOutlined />
                                    Tài khoản
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <div>
                        <ShoppingCartOutlined className={`${theme === "dark" ? "text-color-white" : "text-black"} text-2xl"`}/>
                    </div>
                </div>
            </Header>
        </WrapperTheme>
    );
};

export default HeaderLayout;
