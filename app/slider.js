"use client";
import Image from "next/image";
import Link from "next/link";

const Slider = () => {
    return (
        <section className="max-w-[1240px] mx-auto px-4 pt-16 pb-14">
            <div
                className="flex flex-1 flex-row bg-customGreyFive rounded-3xl cursor-pointer border-[1px] border-customGrey ">
                <div className="flex-1"></div>
                <div className="flex-1 pb-8 pr-14 pt-[73px]">
                    <h3 className="font-medium text-[32px] leading-[38.1px] text-customBlueThree">Mobile application
                        Metatrader 4</h3>
                    <div className="flex flex-row gap-6 mt-9 pl-[74px]">
                        <Image src="qrcode.svg" alt="qrcode" width={178} height={178} className="object-contain"/>
                        <p className="text-[16px] leading-[19.2px] text-customBlackOne">MetaTrader4 mobile is very
                            similar
                            to MetaTrader4 for PC by its functionality. This mobile application supports most PC
                            terminal's
                            features (all trading functions, execution modes, as well as powerful technical analysis)
                            except
                            for the algorithmic trading functions.</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex-1"></div>
                        <Link href="/login" className="flex-1">
                            <button
                                type="button"
                                className="flex justify-center flex-row items-center px-4 py-2  cursor-pointer bg-customBlueFon rounded-[44px] mt-9 hover:bg-customBlue active:bg-customBlueTwo"
                            >
                                <span className="text-[14px] leading-[16.8px] text-white">View our platform</span>
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-row gap-8 mt-20">
                        <div className="flex flex-col items-center gap-1">
                            <Image src="apple.svg" alt="apple" width={30} height={30}/>
                            <span className="text-[16px] leading-[19.2px] text-customBlackFour">Apple Store</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <Image src="google.svg" alt="google" width={30} height={30}/>
                            <span className="text-[16px] leading-[19.2px] text-customBlackFour">Google Play</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <Image src="android.svg" alt="android" width={30} height={30}/>
                            <span className="text-[16px] leading-[19.2px] text-customBlackFour">Android APK</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider;