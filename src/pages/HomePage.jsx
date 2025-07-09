import Banner from "../components/Banner.jsx";
import Post from "../components/Post.jsx";
import ListStep from "../components/ListStep.jsx";
import OrderComponent from "../components/OrderComponent.jsx";
import Service from "../components/Service.jsx";
import Reason from "../components/Reason.jsx";

const HomePage = () => {
    return(
        <>
            <Banner />
            <Post />
            <ListStep/>
            <OrderComponent/>
            <Service/>
            <Reason/>
        </>
    )
}

export default HomePage;