"use client";
import React, {useState} from "react";
import faqDataThree from "../../utils/faqData3";
import Questions from "../../trading-hours/questions";
import MobileAppSection from "../mobileAppSection";
import ForexMarketConditions from "./forexMarketConditions";
import RegulationsSection from "../RegulationsSection";
import TradeSection from "../tradeSection";
import ForexSection from "./forexSection";
import Link from "next/link";
import metals from "../../utils/metals";
import oil from "../../utils/oil";

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
                title="Top trading conditions for commodities"
                description="Invest in premier commodities such as gold, silver, and oil with Artsmrkts"
                imgSrc="/oil2.png"
                imgAlt="Commodities trading"
            />
            <ForexSection />
            <RegulationsSection
                title="Forex market spreads and swaps"
                blocks={[
                    { title: 'Metals', content: metals },
                    { title: 'Oil', content: oil }
                ]}
            />
            <ForexMarketConditions/>
            <MobileAppSection/>
            <Questions faqData={faqDataThree}/>
        </main>
    );
}
