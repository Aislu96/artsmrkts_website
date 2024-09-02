import Image from "next/image";

export default function Page() {
    return (
        <main className="relative">
            <section className="relative">
                <div className="max-w-7xl mx-auto py-16 flex flex-col gap-14">
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-row gap-2">
                            <p className="text-[16px] leading-[19.2px] text-customGreyEleven">Help center</p>
                            <Image src="arrow.svg" alt="arrow" width={4} height={7}
                                   className="object-contain rotate-90 px-1 py-0.5"/>
                        </div>
                        <p className="text-[16px] leading-[19.2px] text-customOrangeThree">Categories and articles</p>
                    </div>
                    <div className="flex flex-row gap-14">
                        <div className="flex flex-col gap-4 bg-customGreyFour rounded-2xl p-11">
                            <p className="p-2.5 text-[20px] leading-[24px] text-customBlackOne border-b-[1px] border-customGrey border-solid">Any successful withdrawals cancel the bonus amount</p>
                            <p className="p-2.5 text-[20px] leading-[24px] text-customBlackOne">Are my personal details secure with you?</p>
                            <p className="p-2.5 text-[20px] leading-[24px] text-customBlackOne">What documents do you recuire?</p>
                            <p className="p-2.5 text-[20px] leading-[24px] text-customBlackOne">How can I verify my profile?</p>
                            <p className="p-2.5 text-[20px] leading-[24px] text-customBlackOne">What should I do if fail the appropriateness test?</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
