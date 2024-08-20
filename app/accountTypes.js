import Link from "next/link";

const AccountTypes = () => {
    return (
        <section className="relative bg-customGreyFour rounded-t-[80px]">
            <div className="bg-custom-gradient w-full h-full absolute rounded-t-[80px] z-10"></div>
            <div className="max-w-[1240px] mx-auto px-4 relative z-20 py-16 flex flex-col gap-16">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="font-medium text-[44px] leading-[52.8px]">Account types for any<br/>trading strategy
                    </h2>
                    <p className="text-[16px] leading-[19.2px]  max-w-[476px]">Tired of hight spreads and commissions?
                        You want to gain
                        every penny from the market, check our account types and maximize your profit.</p>
                </div>
                <div className="flex flex-row justify-between gap-12">
                    <div
                        className="my-2 p-6 bg-white rounded-2xl border-t-[3px] border-t-white cursor-pointer shadow-none hover:shadow-2xl hover:border-t-customBlueFon hover:rounded-t-none flex-1">
                        <h3 className="font-medium text-[32px] leading-[38.4px] text-customBlackOne mb-4">Standard</h3>
                        <p className="text-[16px] leading-[19.2px] text-customGreySeven mt-16px">Even our standard
                            account
                            is zero commission</p>
                        <div className="flex flex-row mt-[70px] mb-8 items-baseline">
                            <span
                                className="text-[70px] leading-[84px] font-medium text-customBlackFour mr-1">100</span>
                            <span
                                className="text-[14px] leading-[16.8px] font-medium text-customBlackFour mr-2 relative bottom-1">$</span>
                            <span
                                className="text-[14px] leading-[16.8px] text-customGreyEight max-w-[114px] relative bottom-5">Minimum
                            deposit</span>
                        </div>
                        <div className="h-[1px] bg-customGreyNine w-full my-8"></div>
                        <div className="flex flex-col mb-16">
                            <div className="flex flex-row gap-4 px-4 py-2 justify-between items-end">
                                <span className="text-[16px] leading-[19.2px]">Spreads<br/>from</span>
                                <p className="flex flex-row gap-1 items-end">
                                <span
                                    className="text-[44px] leading-[52.8px] font-medium text-customBlackFour relative -bottom-3">16</span>
                                    <span className="text-[14px] leading-[16.8px] text-customBlackFour">pips</span>
                                </p>
                            </div>


                            <div className="flex flex-row gap-4 px-4 py-3.5 justify-between items-end">
                                <span className="text-[16px] leading-[19.2px]">Commission</span>
                                <p className="flex flex-row items-end gap-1">
                                <span
                                    className="text-[44px] leading-[52.8px] font-medium text-customBlackFour relative -bottom-3">0</span>
                                    <span className="text-[14px] leading-[16.8px] text-customBlackFour">$</span>
                                </p>
                            </div>
                            <div className="flex flex-row gap-4 px-4 py-2.5 justify-between items-end">
                                <span className="text-[16px] leading-[19.2px]">Trading<br/>instruments</span>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row gap-2 justify-end">
                                    <span
                                        className="text-[14px] leading-[16.8px] font-medium text-customBlackFou">Forex</span>
                                        <span
                                            className="text-[14px] leading-[16.8px] font-medium text-customBlackFour">Metals</span>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                    <span
                                        className="text-[14px] leading-[16.8px] font-medium text-customBlackFour">Indices</span>
                                        <span
                                            className="text-[14px] leading-[16.8px] font-medium text-customBlackFour">Oil</span>
                                        <span
                                            className="text-[14px] leading-[16.8px] font-medium text-customBlackFour">Crypto</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href="/register">
                            <button
                                type="button"
                                className="flex justify-center items-center w-full py-3  cursor-pointer rounded-[44px] bg-customBlueFon hover:bg-customBlue active:bg-customBlueTwo"
                            >
                                <span className="text-[20px] leading-[24px] font-medium text-white">Register</span>
                            </button>
                        </Link>
                    </div>
                    <div
                        className="p-8 bg-white rounded-2xl border-t-[3px] border-t-white cursor-pointer shadow-none hover:shadow-2xl hover:border-t-customOrangeTwo hover:rounded-t-none flex-1">
                        <div className="flex flex-row justify-between mb-4">
                            <h3 className="font-medium text-[32px] leading-[38.4px] text-customBlackOne">VIP</h3>
                            <div
                                className="flex justify-center items-center  py-2 px-4 cursor-pointer rounded-[44px] bg-customOrangeSix h-[27px]">
                                <span className="text-[16px] leading-[19.2px] text-white">recommended</span>
                            </div>
                        </div>
                        <p className="text-[16px] leading-[19.2px] text-customGreySeven mt-16px">Be under the spot with
                            our VIP account, ultra-fast position execution</p>
                        <div className="flex flex-row mt-[70px] mb-8 items-baseline">
                            <span
                                className="text-[70px] leading-[84px] font-medium text-customBlackFour mr-1">2000</span>
                            <span
                                className="text-[14px] leading-[16.8px] font-medium text-customBlackFour mr-2 relative bottom-1">$</span>
                            <span
                                className="text-[14px] leading-[16.8px] text-customGreyEight max-w-[114px] relative bottom-5">Minimum
                            deposit</span>
                        </div>
                        <div className="h-[1px] bg-customGreyNine w-full my-8"></div>
                        <div className="flex flex-col mb-16">
                            <div className="flex flex-row gap-4 px-4 py-2 justify-between items-end">
                                <span className="text-[16px] leading-[19.2px]">Spreads<br/>from</span>
                                <p className="flex flex-row gap-1 items-end">
                                <span
                                    className="text-[44px] leading-[52.8px] font-medium text-customBlackFour relative -bottom-3">10</span>
                                    <span className="text-[14px] leading-[16.8px] text-customBlackFour">pips</span>
                                </p>
                            </div>


                            <div className="flex flex-row gap-4 px-4 py-3.5 justify-between items-end">
                                <span className="text-[16px] leading-[19.2px]">Commission</span>
                                <p className="flex flex-row items-end gap-1">
                                <span
                                    className="text-[44px] leading-[52.8px] font-medium text-customBlackFour relative -bottom-3">0</span>
                                    <span className="text-[14px] leading-[16.8px] text-customBlackFour">$</span>
                                </p>
                            </div>
                            <div className="flex flex-row gap-4 px-4 py-2.5 justify-between items-end">
                                <span className="text-[16px] leading-[19.2px]">Trading<br/>instruments</span>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row gap-2 justify-end">
                                    <span
                                        className="text-[14px] leading-[16.8px] font-medium text-customBlackFou">Forex</span>
                                        <span
                                            className="text-[14px] leading-[16.8px] font-medium text-customBlackFour">Metals</span>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <span
                                            className="text-[14px] leading-[16.8px] font-medium text-customBlackFour">Indices</span>
                                        <span
                                            className="text-[14px] leading-[16.8px] font-medium text-customBlackFour">Crypto</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href="/register">
                            <button
                                type="button"
                                className="flex justify-center items-center w-full py-3  cursor-pointer rounded-[44px] bg-customOrangeTwo hover:bg-customOrange active:bg-customOrangeThree"
                            >
                                <span className="text-[20px] leading-[24px] font-medium text-white">Register</span>
                            </button>
                        </Link>
                    </div>
                    <div
                        className="my-2 p-6 bg-white rounded-2xl border-t-[3px] border-t-white cursor-pointer shadow-none hover:shadow-2xl  hover:border-t-customBlueFon hover:rounded-t-none flex-1">
                        <h3 className="font-medium text-[32px] leading-[38.4px] text-customBlackOne mb-4">ECN</h3>
                        <p className="text-[16px] leading-[19.2px] text-customGreySeven mt-16px">The game changer
                            account with almost nil spreads and zero commission</p>
                        <div className="flex flex-row mt-[70px] mb-8 items-baseline">
                            <span
                                className="text-[70px] leading-[84px] font-medium text-customBlackFour mr-1">5000</span>
                            <span
                                className="text-[14px] leading-[16.8px] font-medium text-customBlackFour mr-2 relative bottom-1">$</span>
                            <span
                                className="text-[14px] leading-[16.8px] text-customGreyEight max-w-[114px] relative bottom-5">Minimum depositt</span>
                        </div>
                        <div className="h-[1px] bg-customGreyNine w-full my-8"></div>
                        <div className="flex flex-col mb-16">
                            <div className="flex flex-row gap-4 px-4 py-2 justify-between items-end">
                                <span className="text-[16px] leading-[19.2px]">Spreads<br/>from</span>
                                <p className="flex flex-row gap-1 items-end">
                                <span
                                    className="text-[44px] leading-[52.8px] font-medium text-customBlackFour relative -bottom-3">3</span>
                                    <span className="text-[14px] leading-[16.8px] text-customBlackFour">pips</span>
                                </p>
                            </div>


                            <div className="flex flex-row gap-4 px-4 py-3.5 justify-between items-end">
                                <span className="text-[16px] leading-[19.2px]">Commission</span>
                                <p className="flex flex-row items-end gap-1">
                                <span
                                    className="text-[44px] leading-[52.8px] font-medium text-customBlackFour relative -bottom-3">0</span>
                                    <span className="text-[14px] leading-[16.8px] text-customBlackFour">$</span>
                                </p>
                            </div>
                            <div className="flex flex-row gap-4 px-4 py-2.5 justify-between items-center">
                                <span className="text-[16px] leading-[19.2px]">Trading<br/>instruments</span>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row gap-2">
                                    <span
                                        className="text-[14px] leading-[16.8px] font-medium text-customBlackFou">Forex</span>
                                        <span
                                            className="text-[14px] leading-[16.8px] font-medium text-customBlackFour">Metals</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href="/register">
                            <button
                                type="button"
                                className="flex justify-center items-center w-full py-3  cursor-pointer rounded-[44px] bg-customBlueFon hover:bg-customBlue active:bg-customBlueTwo"
                            >
                                <span className="text-[20px] leading-[24px] font-medium text-white">Register</span>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AccountTypes;