import {WrapperTheme} from "../components/WrapperTheme.jsx";
import HeaderLayout from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {ProfilePage} from "../pages/ProfilePage.jsx";

export const ProfileLayout = ()=>{
    return (
        <>
            <WrapperTheme>
                <HeaderLayout/>
                    <main className={"mt-18"}>
                        <ProfilePage />
                    </main>
                <Footer className={"!mt-0"} />
            </WrapperTheme>
        </>
    )
}