import {DatePicker, Button, ConfigProvider} from 'antd';
import {CaretDownFilled, CaretUpOutlined, CaretDownOutlined} from '@ant-design/icons';
import {useState} from "react";
import dayjs from 'dayjs';

const OrderComponent = () => {
    const styleBackground = {
        width: "100%",
        height: "350px",
        backgroundImage: "url('https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        filter: "brightness(50%)",
    }

    const [quantity, setQuantity] = useState(0);
    const handleQuantity = (value) => {
        setQuantity((prev) => {
            if (value === "-" && prev > 0) {
                return prev - 1;
            } else if (value === "+") {
                return prev + 1;
            }
            return prev;
        });
    }


    return (
        <>
            <div className={"mt-18 relative"}>
                <div style={styleBackground} className={'text-white'}> </div>
                <div className={"absolute flex top-30 text-white justify-around items-baseline w-full"}>
                    <div className={"w-75"}>
                        <h2 className={"text-4xl"}>ĐẶT TIỆC Ở ĐÂY</h2>
                        <p className={"text-sm mt-5"}>Đặt tiệc ngay hôm nay để những sự kiện quan trọng của bạn trở nên đơn giản và dễ dàng hơn bao giờ hết</p>
                    </div>
                    <div className={'text-2xl text-right'}>
                        <h2>CHỌN NGÀY ĐẶT</h2>
                        <ConfigProvider
                            theme={{
                                components: {
                                    DatePicker: {
                                        inputFontSizeLG: 30,

                                    },
                                },
                            }}
                        >
                            <DatePicker
                                size="large"
                                format="DD/MM"
                                suffixIcon={<CaretDownFilled className="!text-white text-xl" style={{fontWeight: 'bold'}}/>}
                                allowClear={false}
                                defaultValue={dayjs()}
                                className="w-35 !bg-transparent !text-white !border-0"
                            />
                        </ConfigProvider>
                    </div>
                    <div>
                        <h2 className={"text-2xl"}>SỐ BÀN TIỆC</h2>
                        <div className={"text-2xl flex items-center gap-4 justify-end"}>
                            <span>{quantity}</span>
                            <div className={"flex flex-col"}>
                                <CaretUpOutlined onClick={() =>handleQuantity("+")} className={"cursor-pointer"} />
                                <CaretDownOutlined onClick={() =>handleQuantity("-")} className={"cursor-pointer"} />
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-5"}>
                        <Button type={"primary"} className={"!p-7 !rounded-none"}>ĐẶT TIỆC NGAY</Button>
                        <Button style={{
                                    color: 'white',
                                    borderColor: 'white',
                                    backgroundColor: 'transparent',
                                    borderRadius: "0"
                                }}
                                variant="outlined" className={"!p-7"}>XEM THỰC ĐƠN</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderComponent;