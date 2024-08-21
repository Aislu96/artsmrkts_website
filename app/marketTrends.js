'use client';
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

const MarketTrends = () => {
    const [isHoveredMarket, setIsHoveredMarket] = useState(false);
    const [isActiveMarket, setIsActiveMarket] = useState(false);
    const [isHoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="max-w-[1280px] mx-auto py-16">
            <h2 className="text-customBlueThree text-[44px] leading-[52.8px] font-medium mb-14">Keep up with market
                trends</h2>
            <div className="flex flex-row gap-5">
                <div className={`rounded-2xl relative cursor-pointer ${isHoveredCard === 'cubes' ? 'box-shadow-three' : ''}`} onMouseEnter={() => setHoveredCard('cubes')}
                     onMouseLeave={() => setHoveredCard(null)}>
                    <div
                        className="flex justify-center items-center  py-2 px-4 rounded-[100px] bg-customOrangeSix h-[27px] w-max absolute -top-3.5 right-7">
                        <span className="text-[16px] leading-[19.2px] text-white">hot news</span>
                    </div>
                    <Image src="cubes.svg" alt="cubes" width={304} height={368} className="rounded-2xl"/>
                    <div
                        className={`px-4 pt-4 flex flex-col gap-2 rounded-2xl bg-custom-gradient-three absolute bottom-0 left-0 w-full ${isHoveredCard === 'cubes' ? 'pb-20' : 'pb-8'}`}>
                        <p className="font-medium text-[24px] leading-[28.8px] text-white">Bitcoin`s Struggle:</p>
                        <p className="text-[16px] leading-[19.2px] text-white">Is a Crypto Winter Looming?</p>
                    </div>
                </div>
                <div className={`rounded-2xl relative cursor-pointer ${isHoveredCard === 'stock' ? 'box-shadow-three' : ''}`} onMouseEnter={() => setHoveredCard('stock')}
                     onMouseLeave={() => setHoveredCard(null)}>
                    <Image src="stock.svg" alt="stock" width={304} height={368} className="rounded-2xl"/>
                    <div
                        className={`px-4 pt-4 flex flex-col gap-2 rounded-2xl bg-custom-gradient-three absolute bottom-0 left-0 w-full ${isHoveredCard === 'stock' ? 'pb-20' : 'pb-4'}`}>
                        <p className="font-medium text-[24px] leading-[28.8px] text-white">US Stock Soar on Srong Jobs Data and Tech Rally</p>
                        <p className="text-[16px] leading-[19.2px] text-white">The US stock market kicked off the second half of t...</p>
                    </div>
                </div>
                <div className={`rounded-2xl relative cursor-pointer ${isHoveredCard === 'gold' ? 'box-shadow-three' : ''}`} onMouseEnter={() => setHoveredCard('gold')}
                     onMouseLeave={() => setHoveredCard(null)}>
                    <Image src="gold.svg" alt="gold" width={304} height={368} className="rounded-2xl"/>
                    <div
                        className={`px-4 pt-4 flex flex-col gap-2 rounded-2xl bg-custom-gradient-three absolute bottom-0 left-0 w-full ${isHoveredCard === 'gold' ? 'pb-20' : 'pb-8'}`}>
                        <p className="font-medium text-[24px] leading-[28.8px] text-white">Bitcoin`s Struggle:</p>
                        <p className="text-[16px] leading-[19.2px] text-white">Is a Crypto Winter Looming?</p>
                    </div>
                </div>
                <div className={`rounded-2xl relative cursor-pointer ${isHoveredCard === 'money' ? 'box-shadow-three' : ''}`} onMouseEnter={() => setHoveredCard('money')}
                     onMouseLeave={() => setHoveredCard(null)}>
                    <Image src="money.svg" alt="money" width={304} height={368} className="rounded-2xl"/>
                    <div
                        className={`px-4 pt-4 flex flex-col gap-2 rounded-2xl bg-custom-gradient-three absolute bottom-0 left-0 w-full ${isHoveredCard === 'money' ? 'pb-20' : 'pb-4'}`}>
                        <p className="font-medium text-[24px] leading-[28.8px] text-white">US Stock Soar on Srong Jobs Data and Tech Rally</p>
                        <p className="text-[16px] leading-[19.2px] text-white">The US stock market kicked off the second half of t...</p>
                    </div>
                </div>
            </div>
            <Link
                href="/"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 mt-8 ml-auto w-max"
                onMouseEnter={() => setIsHoveredMarket(true)}
                onMouseLeave={() => setIsHoveredMarket(false)}
                onClick={() => setIsActiveMarket(!isActive)}
            >
                <p
                    className={`text-[20px] leading-[24px] font-medium ${
                        isActiveMarket ? "text-customBlackFour" : isHoveredMarket ? "text-customBlueTwo" : "text-customBlue"
                    }`}
                >
                    View all market news
                </p>
                {isActiveMarket ? (
                    <Image src="arrowthree.svg" alt="arrow" width={40} height={2} className="object-contain"/>
                ) : (
                    <Image
                        src={isHoveredMarket ? "arrowtwo.svg" : "arrowone.svg"}
                        alt="arrow"
                        width={isHoveredMarket ? 72 : 40}
                        height={2}
                        className="object-contain"
                    />
                )}
            </Link>
        </section>
    );
};

export default MarketTrends;
