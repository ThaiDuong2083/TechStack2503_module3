import { Col, Row } from 'antd';
import {YoutubeFilled, FacebookFilled} from  "@ant-design/icons"
import image1 from '../assets/1.png';

const Footer = ()=>{
    const footerStyle = {
        backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(https://intern-project-chi.vercel.app/static/media/background-footer.3db8104f4c43054ea542.jpg)',
        backgroundPosition: '50%',
        height: '380px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderBbottom: '1px solid #333',
        clear: 'both',
        marginTop: "5%"
    }
    return (
        <>
            <footer style={footerStyle}>
                <Row className={"text-white px-25 pt-7 border-b-1"} gutter={50}>
                    <Col span={6}>
                        <h2 className={"text-xl font-semibold"}>Về chúng tôi</h2>
                        <p className={"leading-10"}>Số điện thoại: 095.366.4722</p>
                        <p>Địa chỉ: số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội</p>
                    </Col>
                    <Col span={7}>
                        <h2 className={"text-xl font-semibold"}>Phương thức thanh toán</h2>
                        <div className={"flex gap-2 mt-3"}>
                            <img src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png" className={"w-20 h-20"} />
                            <img src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png" className={"w-20 h-20"} />
                            <img src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png" className={"w-20 h-20"} />
                            <img src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png" className={"w-20 h-20"} />
                        </div>
                        <div className={"flex gap-2"}>
                            <img src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png" className={"w-20 h-20"} />
                            <img src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png" className={"w-20 h-20"} />
                            <img src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png" className={"w-20 h-20"} />
                        </div>
                    </Col>
                    <Col span={4}>
                        <h2 className={"text-xl font-semibold"}>Truyền thông xã hội</h2>
                        <div className={"font-bold leading-10"}><FacebookFilled /> Facebook</div>
                        <div className={"font-bold"}><YoutubeFilled /> Youtube</div>
                    </Col>
                    <Col span={7}>
                        <h2 className={"text-xl font-semibold"}>Hỗ trợ khách hàng</h2>
                        <div>
                            <div className={"flex gap-1 my-3"}>
                                <b>Liên hệ </b>
                                <div className={"flex flex-col"}>
                                    <span>Hotline: 036.555.1123</span>
                                    <span className={"leading-6"}>Email: happy.@gmal.com</span>
                                </div>
                            </div>
                            <div>
                                <b>Địa chỉ:</b>
                                <span> Số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội</span>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className={"px-25 text-white pt-7 flex justify-between"}>
                    <div>
                        <h2 className={"text-xl font-semibold"}>Công ty TNHH Minh Trí</h2>
                        <p className={"leading-10"}>số CND/DN/ cấp ngày 2/1/2020</p>
                    </div>
                    <div className={"mr-56"}>
                        <img className={"w-24 h-9"} src={image1} />
                        <p>© Thông báo</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;