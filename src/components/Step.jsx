const Step = ({steps}) => {
    return (
        <>
            <div className={"flex justify-center"}>
                {steps.map((step) => (
                    <div className={"relative text-center w-1/6"}>
                        {step.step > 1 ?
                            <div className={"absolute top-14 flex gap-2"}>
                                <div className={"bg-gray-300 w-1 h-1"}></div>
                                <div className={"bg-gray-300 w-1 h-1"}></div>
                                <div className={"bg-gray-300 w-1 h-1"}></div>
                                <div className={"bg-gray-300 w-1 h-1"}></div>
                                <div className={"bg-gray-300 w-1 h-1"}></div>
                            </div>
                            : ""
                        }
                        <div className={"bg-gray-200 relative !text-black w-28 h-28 m-auto flex justify-center items-center"} style={{borderRadius:"50%"}} >
                            {step.icon}
                            <div className={"text-xl flex justify-center items-center text-white absolute -bottom-5 w-10 h-10 bg-red-500"} style={{borderRadius:"50%"}} >{step.step}</div>
                        </div>
                        <div className={"mt-14"}>
                            <p className={"text-xl font-medium"}>{step.title}</p>
                            <p className={"text-sm"} >{step.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Step;