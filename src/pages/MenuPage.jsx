import {WrapperTheme} from "../components/WrapperTheme.jsx";
import {useTheme} from "../hook/UseTheme.jsx";
import {ListMenu} from "../components/ListMenu.jsx";

const MenuPage = () => {
    const {theme: currentTheme} = useTheme();

    return (
        <WrapperTheme className={`py-10 px-25 ${currentTheme === "dark" ? "" : "!bg-gray-100"}`}>
           <ListMenu currentTheme={currentTheme} />
        </WrapperTheme>
    )
}

export default MenuPage;