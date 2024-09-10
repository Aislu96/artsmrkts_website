"use client";
import React, {useState} from "react";
import faqDataTwo from "../../utils/faqData2";
import Questions from "../../trading-hours/questions";
import MobileAppSection from "../mobileAppSection";
import TradeSection from "../tradeSection";
import ForexMarketConditions from "./forexMarketConditions";
import RegulationsSection from "../RegulationsSection";
import ForexSection from "./forexSection";
import Link from "next/link";
import majors from "../../utils/majors";
import minors from "../../utils/minors";

export default function Page() {
    const [activePage, setActive] = useState(1)

    return (
        <main className="relative">
            <section className="bg-customGreyFour pt-6 pb-2">
                <div className="flex flex-row max-w-screen-xl mx-auto gap-2">
                    <Link href="/markets/forex" className="flex flex-row py-4 px-2 gap-2.5 cursor-pointer" onClick={() => setActive(1)}>
                        <div className={` w-2.5 h-2.5 rounded-2xl my-auto ${activePage === 1 ? 'bg-customOrange' : 'bg-customGreyFour'}`}></div>
                        <p className={`text-[16px] font-semibold leading-[19.2px] ${activePage === 1 ? 'text-customGreyEleven' : 'text-customGreyThree'}`}>Forex</p>
                    </Link>
                    <Link href="/markets/commodities" className="flex flex-row py-4 px-2 gap-2.5 cursor-pointer" onClick={() => setActive(2)}>
                        <div className={` w-2.5 h-2.5 rounded-2xl my-auto ${activePage === 2 ? 'bg-customOrange' : 'bg-customGreyFour'}`}></div>
                        <p className={`text-[16px] font-semibold leading-[19.2px] ${activePage === 2 ? 'text-customGreyEleven' : 'text-customGreyThree'}`}>Commodities</p>
                    </Link>
                    <Link href="/markets/indices" className="flex flex-row py-4 px-2 gap-2.5 cursor-pointer" onClick={() => setActive(3)}>
                        <div className={` w-2.5 h-2.5 rounded-2xl my-auto ${activePage === 3 ? 'bg-customOrange' : 'bg-customGreyFour'}`}></div>
                        <p className={`text-[16px] font-semibold leading-[19.2px] ${activePage === 3 ? 'text-customGreyEleven' : 'text-customGreyThree'}`}>Indices</p>
                    </Link>
                    <div className="flex flex-row py-4 px-2 gap-2.5 cursor-pointer">
                        <p className="text-[16px] font-semibold leading-[19.2px] text-customGrey">Stocks (soon)</p>
                    </div>
                </div>
            </section>
            <TradeSection
                title="Trade Forex with Low & Stable Spreads"
                description="Enter the world of global Forex trading and engage with top currency pairs, benefiting from highly competitive spreads."
                imgSrc="/pic.png"
                imgAlt="Forex trading"
            />
            <ForexSection />
            <RegulationsSection
                title="Forex market spreads and swaps"
                blocks={[
                    { title: 'Majors', content: majors },
                    { title: 'Minors', content: minors }
                ]}
            />
            <ForexMarketConditions/>
            <MobileAppSection/>
            <Questions faqData={faqDataTwo}/>
        </main>
    );
}
