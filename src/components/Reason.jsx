const Reason = ()=>{
    const reasonList = [
        {
            url: "https://intern-project-chi.vercel.app/static/media/bg1.da6d3327978f205184d6.jpg",
            title: "SỰ LỰA CHỌN ẨM THỰC SỐ 1",
            content: "Thuộc Golden Gate Group - 15 năm kinh nghiệp, hơn 400 nhà hàng toàn quốc",
        },
        {
            url: "https://intern-project-chi.vercel.app/static/media/bg2.682ad3017ba51acb4d80.jpg",
            title: "THỰC PHẨM AN TOÀN",
            content: "Đảo bảm an toàn vệ sinh thực phẩm từ nguồn cung cấp đén khâu chế biến",
        },
        {
            url: "https://intern-project-chi.vercel.app/static/media/bg3.cd94ec83ef439a755c40.jpg",
            title: "THỰC PHẨM ĐA DẠNG",
            content: "Menu phong phú, kết hợp tinh hoa ẩm thực Á - Âu, đa dạng lựa chọn",
        },
        {
            url: "https://intern-project-chi.vercel.app/static/media/bg4.63e3fbb06b475740c09e.jpg",
            title: "PHỤC VỤ CHUYÊN NGHIỆP",
            content: "Tư vấn tận tâm, phục vụ chu đáo, dịch vụ linh hoạt, thanh toán tiện lợi",
        },
    ]

    return (
        <>
            <div className={"text-center !mt-20 !px-32"}>
                <h2 className={"my-15 text-4xl font-semibold"}>VÌ SAO LỰA CHỌN CHÚNG TÔI?</h2>
                <div className={"flex gap-12 h-92"}>
                    {reasonList.map((item, index) => (
                        <div key={index} className={"basis-1/4"}>
                            <img className={"object-cover h-68 w-full"} src={item.url} alt="" />
                            <h2 className={"font-semibold mt-5"}>{item.title}</h2>
                            <p className={"text-sm"}>{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Reason;