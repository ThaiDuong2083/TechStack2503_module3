import { TransferMenu } from "../components/TransferMenu"
import { WrapperTheme } from "../components/WrapperTheme"

export const TransferMenuPage = () => {
    return (
        <>
            <WrapperTheme className='w-full'>
                <div className='px-20'>
                    <TransferMenu />
                </div>
            </WrapperTheme>
        </>
    )
}