import Link from "next/link";
import Image from "next/image";

const Trade = () => {
    return (
        <section className="mt-16 mb-20 relative max-w-[1240px] mx-auto bg-customGreyFour rounded-3xl flex flex-row">
            <div className="bg-custom-gradient w-full h-full absolute z-10 px-4 rounded-3xl"></div>
            <div className="flex flex-col flex-1 relative z-20 mt-32 mb-28 ml-36 overflow-hidden">
                <h3 className="font-medium text-[32px] leading-[38.1px] text-customBlackFive">Trade Forex, Indices,
                    Stocks and more with Artsmrkts - the best Forex broker</h3>
                <Link href="/login" className="flex-1 mt-16 relative z-20">
                    <button
                        type="button"
                        className="flex justify-center flex-row items-center px-11 py-3  cursor-pointer border-[1px] border-customGrey bg-white  rounded-[44px] hover:bg-customGreyTwo active:bg-customGrey"
                    >
                        <span className="text-[20px] leading-[24px] font-semibold text-customOrangeFive">Register</span>
                    </button>
                </Link>
            </div>
            <Image src="magnet.svg" alt="magnet" width={617} height={408}
                   className="object-contain relative z-20 -bottom-12"/>
        </section>
    )
}

export default Trade;