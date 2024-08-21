'use client';
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

const MarketTrends = () => {
    const [hoveredLink,setHoveredLink] = useState(false);
    return (
        <section className="max-w-[1280px] px-4 mx-auto py-16">
            <h2 className="text-customBlueThree text-[44px] leading-[52.8px] font-medium mb-14">Keep up with market trends</h2>
            <Link href="/" rel="noopener noreferrer" className="flex flex-row  items-center gap-2" onMouseEnter={() => setHoveredLink(true)}
                  onMouseLeave={() => setHoveredLink(false)}>
                <p className={`text-[20px] leading-[24px] font-medium  ${hoveredLink? "text-customBlueTwo" : "text-customBlue"} active: text-customBlackFour`}>View all market news</p>
                {hoveredLink?  <Image src="arrowtwo.svg" alt="arrow" width={72} height={2} className="object-contain"/> :  <Image src="arrowone.svg" alt="arrow" width={40} height={2} className="object-contain"/>}
            </Link>
        </section>
    )
}

export default MarketTrends;