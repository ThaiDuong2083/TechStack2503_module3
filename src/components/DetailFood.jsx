import { useParams } from "react-router-dom";
import { WrapperTheme } from "./WrapperTheme"
import { Row, Col, Carousel, Button, Tabs, Rate } from "antd";
import { useEffect, useState } from "react";
import { getDetailProduct as getDetailProductApi } from "../service/productService";
import { useTheme } from "../hook/UseTheme";
import { ConfigTheme } from "../theme/ConfigTheme"
import dayjs from "dayjs";
export const DetailFood = () => {
    const { theme } = useTheme()
    const { id } = useParams();
    const [detailProduct, setDetailProduct] = useState(null);
    const [descriptionAndRate, setDescriptionAndRate] = useState({
        description: "",
        reviews: []
    })
    const getDetailProduct = async (id) => {
        try {
            const res = await getDetailProductApi(id);
            setDetailProduct(res);
            setDescriptionAndRate({
                description: res.description,
                reviews: res.reviews
            })
        } catch (error) {
            console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
        }
    };

    useEffect(() => {
        getDetailProduct(id);
    }, []);

    const tabItems = [
        {
            key: "1",
            label: "📝 Mô tả",
            children: (
                <p className={`text-base leading-6 ${theme === "dark" ? "!text-white" : "text-gray-700"}`}>
                    {descriptionAndRate.description}
                </p>
            ),
        },
        {
            key: "2",
            label: `⭐ Đánh giá (${descriptionAndRate.reviews?.length || 0})`,
            children: (
                <div className="space-y-4">
                    {descriptionAndRate.reviews?.map((review, index) => (
                        <div key={index} className="border p-4 rounded-md">
                            <div className="flex items-center justify-between mb-1">
                                <span className={`font-semibold  ${theme === "dark" ? "!text-white" : "text-gray-800"}`}>{review.reviewerName}</span>
                                <span className={`text-sm  ${theme === "dark" ? "!text-white" : "text-gray-500"}`}>{dayjs(review.date).format("DD/MM/YYYY")}</span>
                            </div>
                            <Rate disabled allowHalf defaultValue={review.rating} />
                            <p className={` ${theme === "dark" ? "!text-white" : "text-gray-700"} mt-2`}>
                                {review.comment}
                            </p>
                        </div>
                    ))}
                </div>
            ),
        },
    ];
    return (
        <WrapperTheme className="mx-20">
            {detailProduct ? (
                <>
                    <Row gutter={[50, 24]} className="py-6">
                        <Col span={12}>
                            <div className="bg-gray-400 rounded-2xl p-4 shadow-md">
                                <Carousel arrows autoplay className="rounded-xl overflow-hidden">
                                    {detailProduct.images?.map((imageUrl, index) => (
                                        <div key={index} className="flex justify-center items-center">
                                            <img
                                                src={imageUrl}
                                                alt={`Ảnh ${index}`}
                                                className="w-full max-h-[400px] object-contain rounded-xl"
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </Col>

                        <Col span={12}>
                            <div className={`flex flex-col gap-4 `}>
                                <h1 className={`text-4xl font-bold ${theme === "dark" ? "!text-white" : "text-gray-800"}`}>{detailProduct.title}</h1>

                                <div className={`flex flex-col gap-2 ${theme === "dark" ? "!text-white" : "text-gray-600"}`}>
                                    <div className={`text-base`}>
                                        <span className={`font-medium`}>Danh mục:</span> {detailProduct.category}
                                    </div>
                                    <div className={`text-base`}>
                                        <span className={`font-medium`}>Thương hiệu:</span> {detailProduct.brand}
                                    </div>
                                    <div className={`text-base flex items-center gap-1`}>
                                        <span className={`font-medium`}>Đánh giá:</span> {detailProduct.rating}
                                        <Rate disabled allowHalf defaultValue={detailProduct.rating} />
                                    </div>
                                </div>

                                <p className={`text-lg  ${theme === "dark" ? "!text-white" : "text-gray-700"}`}>
                                    <span className={`font-medium`}>Số lượng:</span> {detailProduct.stock}
                                </p>

                                <p className={`text-xl font-semibold text-red-500`}>
                                    ${(detailProduct.price - detailProduct.price * detailProduct.discountPercentage/100).toFixed(2)}{' '}
                                    <span className={`text-gray-400 line-through text-lg ml-2`}>
                                        ${detailProduct.price}
                                    </span>
                                </p>

                                <Button type="primary" size="large" className="w-40">
                                    Thêm vào giỏ hàng
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <ConfigTheme>
                        <Tabs defaultActiveKey="1" items={tabItems} className="mt-8" />
                    </ConfigTheme>
                </>

            ) : (
                <p className="text-center p-8">Đang tải dữ liệu sản phẩm...</p>
            )}
        </WrapperTheme>
    )
}