"use client";
import Link from "next/link";
import Image from "next/image";
import {Inter, Zen_Kaku_Gothic_New} from "next/font/google";

const inter = Inter({subsets: ["latin"]});
const zen_kaku_gothic_new = Zen_Kaku_Gothic_New({subsets: ["latin"], weight: ["400"]});

const Banner = () => {
    return (
        <section className="relative bg-customGreyFour rounded-b-[80px]">
            <div className="bg-custom-gradient w-full h-full absolute rounded-b-[80px] z-10"></div>
            <div className="flex flex-row gap-[123px] max-w-[1240px] mx-auto">
                <div className="flex flex-col pt-24 relative flex-1 z-20 mb-40">
                    <h1 className="font-semibold text-[54px] leading-[64.8px] text-customBlueThree">Reach your trading
                        potential</h1>
                    <p className="text-[18px] leading-[21.6px] text-customBlackOne mt-5">Trade with the global
                        recognized broker and get to unmatched trading conditions on the market</p>
                    <div className="flex flex-row gap-2 mt-11">
                        <Link href="/">
                            <button
                                type="button"
                                className="flex justify-center items-center px-[51.75px] py-3  cursor-pointer rounded-[44px] border-[1px] border-customGrey hover:bg-customGreyTwo active:bg-customGrey"
                            >
                                <span
                                    className="text-[20px] leading-[24px] text-customBlue font-medium">Try free demo</span>
                            </button>
                        </Link>
                        <Link href="/register">
                            <button
                                type="button"
                                className="flex justify-center items-center px-[51.75px] py-3  cursor-pointer rounded-[44px] bg-customOrangeTwo hover:bg-customOrange active:bg-customOrangeThree"
                            >
                                <span className="text-[20px] leading-[24px] font-medium text-white">Register</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row flex-1 justify-between f-full gap-2">
                    <div className="flex flex-col items-center animate-slide-up my-auto gap-2">
                        <span className={`text-[16px] leading-[19.2px] ${zen_kaku_gothic_new.className}`}>323</span>
                        <Image src="figure.svg" alt="figure" width={57} height={202} className="object-contain"/>
                    </div>
                    <div className="flex flex-col items-center animate-slide-down my-auto gap-2">
                        <Image src="buy.svg" alt="buy" width={71} height={46} className="object-contain relative top-5"/>
                        <Image src="figure.svg" alt="figure" width={90} height={316} className="object-contain"/>
                        {/*<Image src="figureOrange.svg" alt="figure" width={110} height={316} className="object-contain"/>*/}
                    </div>
                    <div className="flex flex-col items-center animate-slide-up my-auto gap-2">
                        <span className={`text-[19px] leading-[22.8px] ${zen_kaku_gothic_new.className}`}>325</span>
                        <Image src="figure.svg" alt="figure" width={74} height={260} className="object-contain"/>
                    </div>
                    <div className="flex flex-col items-center animate-slide-down my-auto gap-2">
                        <span className={`text-[17px] leading-[20.4px] ${zen_kaku_gothic_new.className}`}>324</span>
                        <Image src="figure.svg" alt="figure" width={57} height={202} className="object-contain"/>
                    </div>
                    <div className="flex flex-col items-center animate-slide-up my-auto gap-2">
                        <Image src="sell.svg" alt="sell" width={88} height={58} className="object-contain relative top-5"/>
                        {/*<Image src="figureGreen.svg" alt="figure" width={152} height={444} className="object-contain"/>*/}
                        <Image src="figure.svg" alt="figure" width={120} height={444} className="object-contain"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-5 pb-10 pt-[49px] max-w-[1240px] mx-auto px-4">
                <div className="flex flex-col relative z-20 gap-2 mr-[51px]">
                    <Image src="trustpilot.svg" alt="trustpilot" width={139} height={50} className="object-contain"/>
                    <p className={`${inter.className} text-[12px] leading-[14.4px]`}>Based on 2,446 reviews</p>
                </div>
                <div className="flex flex-row gap-1 pt-[13px] flex-1">
                    <div className="flex flex-row items-center px-4 py-1 gap-4 rounded-lg relative flex-1">
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-customGreyFour rounded-lg opacity-40 z-10"></div>
                        <span
                            className={`text-[32px] leading-[38.4px] font-semibold text-customBlue relative z-20 ${inter.className}`}>2+</span>

                        <p className="text-[16px] leading-[19.2px] text-customBlackThree relative z-20">Million<br />traders</p>
                    </div>
                    <div className="flex flex-row items-center px-[9px] py-1 gap-4 rounded-lg relative flex-1">
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-customGreyFour rounded-lg opacity-40 z-10"></div>
                        <Image src="licenses.svg" alt="licenses" width={20} height={26.25}
                               className="object-contain relative z-20"/>
                        <p className="text-[16px] leading-[19.2px] text-customBlackThree relative z-20">Multiple regulatory <br />licenses</p>
                    </div>
                    <div className="flex flex-row items-center px-4 py-1 gap-4 rounded-lg relative flex-1">
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-customGreyFour rounded-lg opacity-40 z-10"></div>
                        <span
                            className={`text-[32px] leading-[38.4px] font-semibold text-customBlue relative z-20 ${inter.className}`}>24/7</span>
                        <p className="text-[16px] leading-[19.2px] text-customBlackThree relative z-20">Customer<br />support</p>
                    </div>
                    <div className="flex flex-row items-center px-[9px] py-1 gap-4 rounded-lg relative flex-1">
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-customGreyFour rounded-lg opacity-40 z-10"></div>
                        <Image src="protection.svg" alt="protection" width={20} height={25}
                               className="object-contain relative z-20"/>
                        <p className="text-[16px] leading-[19.2px] text-customBlackThree relative z-20">Client found<br />protection</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;