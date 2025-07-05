import HeaderLayout from '../components/Header.jsx';
import Footer from "../components/Footer.jsx";
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <HeaderLayout/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default MainLayout;