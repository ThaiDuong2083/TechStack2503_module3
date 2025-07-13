import { Col, Row } from 'antd';
import {Link} from "react-router-dom";
import PathVariable from "../enum.jsx";
import {useTheme} from "../hook/UseTheme.jsx";

const Service = ()=>{
    const backgroundStyle={
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        filter: 'brightness(50%)',
        transition: '0.3s linear',
        backgroundImage: 'url(https://intern-project-chi.vercel.app/static/media/set_menu.50c5439a3c5c641f3ce0.jpg)',
        };
    const {theme} = useTheme();

    return (
        <>
            <Row className={`${theme==="dark" ? "" : "bg-gray-100"} gap-8 px-20 justify-center py-16`} style={{height:'750px'}}>
                <Col span={7} className="text-center text-white h-1/2" style={{backgroundColor: "rgba(0, 0, 0, 0.83)"}}>
                    <div className="py-6">
                        <h2 className={"py-4 text-5xl"}>DỊCH VỤ</h2>
                        <Row>
                            <Col span={12}>
                                <div className={"py-4 text-2xl"}>TIỆC TẠI GIA</div>
                                <div className={"py-4 text-2xl"}>Tiệc BUFFET</div>
                            </Col>
                            <Col span={12}>
                                <div className={"py-4 text-2xl"}>TIỆC CƯỚI HỎI</div>
                                <div className={"py-4 text-2xl"}>TIỆC SỰ KIỆN</div>
                            </Col>
                        </Row>
                        <p className={"py-4 text-2xl"}>TIỆC TEA BREAK</p>
                    </div>
                    <div className={"text-center flex justify-center items-center flex-col mt-8 h-3/4"} style={{backgroundColor: "rgb(197, 164, 133)"}}>
                        <h3 className={"text-5xl"}>LIÊN HỆ</h3>
                        <div className={"pt-4"}>
                            <p className={"text-2xl"}><span className={"font-medium"}>Address</span>: abc@cmcglobal.vn</p>
                            <p className={"text-2xl"}><span className={"font-medium"}>Hotline</span>: 0919319071</p>
                        </div>
                    </div>
                </Col>
                <Col span={7} >
                    <div className={"text-center relative overflow-hidden w-full"} style={{height: "94%"}}>
                        <div style={backgroundStyle} className={"hover:scale-125"}>
                        </div>
                        <div className={'absolute top-15 left-29 text-white'}>
                            <h2 className={"text-4xl"}>SET MENU</h2>
                            <Link to={PathVariable.ABOUT_ME} className={"!text-white text-sm leading-10 !underline"} >Xem chi tiết</Link>
                        </div>
                    </div>
                </Col>
                <Col span={7} >
                    <div className={"text-center relative overflow-hidden w-full"} style={{height: "94%"}}>
                        <div style={backgroundStyle} className={"hover:scale-125"}>
                        </div>
                        <div className={'absolute top-15 left-16 text-white'}>
                            <h2 className={"text-4xl"}>MENU TỰ CHỌN</h2>
                            <Link to={PathVariable.ABOUT_ME} className={"!text-white text-sm leading-10 !underline"} >Xem chi tiết</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default Service;