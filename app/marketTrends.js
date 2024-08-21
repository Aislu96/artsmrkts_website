'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CardMarketTrends from "@/app/CardMarketTrends";


const MarketTrends = () => {
    const [isHoveredMarket, setIsHoveredMarket] = useState(false);
    const [isActiveMarket, setIsActiveMarket] = useState(false);
    const [isHoveredCard, setHoveredCard] = useState(null);

    const cardsData = [
        {
            id: 'cubes',
            imageSrc: 'cubes.svg',
            badge: 'hot news',
            title: "Bitcoin's Struggle:",
            description: 'Is a Crypto Winter Looming?',
        },
        {
            id: 'stock',
            imageSrc: 'stock.svg',
            title: "US Stock Soar on Strong Jobs Data and Tech Rally",
            description: 'The US stock market kicked off the second half of t...',
        },
        {
            id: 'gold',
            imageSrc: 'gold.svg',
            title: "Bitcoin's Struggle:",
            description: 'Is a Crypto Winter Looming?',
        },
        {
            id: 'money',
            imageSrc: 'money.svg',
            title: "US Stock Soar on Strong Jobs Data and Tech Rally",
            description: 'The US stock market kicked off the second half of t...',
        },
    ];

    return (
        <section className="max-w-[1280px] mx-auto py-16">
            <h2 className="text-customBlueThree text-[44px] leading-[52.8px] font-medium mb-14">Keep up with market trends</h2>
            <div className="flex flex-row gap-5">
                {cardsData.map((card) => (
                    <CardMarketTrends
                        key={card.id}
                        {...card}
                        isHoveredCard={isHoveredCard}
                        onMouseEnter={setHoveredCard}
                        onMouseLeave={() => setHoveredCard(null)}
                    />
                ))}
            </div>
            <Link
                href="/"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 mt-8 ml-auto w-max"
                onMouseEnter={() => setIsHoveredMarket(true)}
                onMouseLeave={() => setIsHoveredMarket(false)}
                onClick={() => setIsActiveMarket(!isActiveMarket)}
            >
                <p
                    className={`text-[20px] leading-[24px] font-medium ${
                        isActiveMarket ? "text-customBlackFour" : isHoveredMarket ? "text-customBlueTwo" : "text-customBlue"
                    }`}
                >
                    View all market news
                </p>
                {isActiveMarket ? (
                    <Image src="arrowthree.svg" alt="arrow" width={40} height={2} className="object-contain" />
                ) : (
                    <Image
                        src={isHoveredMarket ? "arrowtwo.svg" : "arrowone.svg"}
                        alt="arrow"
                        width={isHoveredMarket ? 72 : 40}
                        height={2}
                        className="object-contain transition-all duration-300 ease-in-out"
                    />
                )}
            </Link>
        </section>
    );
};

export default MarketTrends;
