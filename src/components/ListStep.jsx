import Step from "./Step.jsx";

const listStep = () => {
    const steps = [
        {
            step: 1,
            title: "Tìm hiểu thông tin",
            content: "Khách hàng tìm hiểu thông tin và đăng kí tư vấn",
            icon: <svg stroke="currentColor" fill="currentColor" className={"text-5xl"} stroke-width="0"
                       viewBox="0 0 576 512" height="1em"
                       width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32
                        218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04
                        0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
            </svg>
        },
        {
            step: 2,
            title: "Liên hệ tư vấn",
            content: "Nhân vân liên hệ trong 2 tiếng để nhận thông tin",
            icon: <svg stroke="currentColor" fill="currentColor" className={"text-5xl"} stroke-width="0" viewBox="0 0 384 512" height="1em"
                       width="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z"></path>
            </svg>
        },
        {
            step: 3,
            title: "Ký kết hợp đống",
            content: "Khách hàng tìm hiểu thông tin và đăng kí tư vấn",
            icon: <svg stroke="currentColor" fill="currentColor" className={"text-5xl"} stroke-width="0" viewBox="0 0 448 512" height="1em"
                       width="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </svg>
        },
        {
            step: 4,
            title: "Phục vụ tiệc",
            content: "Khách hàng tìm hiểu thông tin và đăng kí tư vấn",
            icon: <svg stroke="currentColor" fill="currentColor" className={"text-5xl"} stroke-width="0" viewBox="0 0 512 512" height="1em"
                       width="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
            </svg>
        },
        {
            step: 5,
            title: "Thanh toán",
            content: "Khách hàng tìm hiểu thông tin và đăng kí tư vấn",
            icon: <svg stroke="currentColor" fill="currentColor" className={"text-5xl"} stroke-width="0" viewBox="0 0 576 512" height="1em"
                       width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
                </svg>
        },
    ]

    return (
        <>
            <div className={"text-center mt-14"}>
                <h2 className={"text-5xl font-semibold"}>5 bước để đặt tiệc</h2>
                <div className={"mt-16"}>
                    <Step steps={steps}/>
                </div>
            </div>
        </>
    )
}

export default listStep;