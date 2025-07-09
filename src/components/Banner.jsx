import { Carousel, Button } from 'antd';

const Banner = () =>{
    return(
        <>
            <div className={"relative"}>
                <Carousel autoplay >
                    <div>
                        <img style={{height: "80vh"}} className={"object-cover w-full brightness-50"} src="https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg" alt="" />
                    </div>
                    <div>
                        <img style={{height: "80vh"}} className={"object-cover w-full brightness-50"} src="https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg" alt="" />
                    </div>
                    <div>
                        <img style={{height: "80vh"}} className={"object-cover w-full brightness-50"} src="https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg" alt="" />
                    </div>
                </Carousel>
                <div className={"absolute text-white top-1/3 left-1/3 text-center"}>
                    <p className={"text-4xl font-bold my-5"}>ƯU ĐÃI LÊN TỚI 30%</p>
                    <p className={"text-4xl font-bold my-5"}>KHI ĐẶT SET MENU SUM VẦY</p>
                    <p className={"text-sm my-5"}>Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2021</p>
                    <Button type={"primary"} className={"!h-14 text-sm font-bold !rounded-none"}>XEM CHI TIÉT ƯU ĐÃI</Button>
                </div>
            </div>
        </>
    )
}

export default Banner;