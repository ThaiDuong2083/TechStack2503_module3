import HeaderLayout from '../components/Header.jsx';
import Footer from "../components/Footer.jsx";
import {Outlet} from 'react-router-dom'
import {WrapperTheme} from "../components/WrapperTheme.jsx";

const MainLayout = () => {
    return (
        <>
           <WrapperTheme>
               <HeaderLayout/>
                   <main className={"mt-18"}>
                       <Outlet/>
                   </main>
               <Footer/>
           </WrapperTheme>
        </>
    )
}

export default MainLayout;