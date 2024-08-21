'use client';
import Image from "next/image";
import {useState} from "react";

const Tools = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isClickedCard, setIsClickedCard] = useState('3');
    const cardText = {
        '0': 'Get all the free education you need to become a better trader. Whether you`re beginner or an expect, we`ll havesomething for you. From articles, to education webinars, videos, and courses; you name it, we`ll have it.',
        '1': 'Get all the free education you need to become we`ll havesomething for you. From articles, to education webinars, videos, and courses; you name it, we`ll have it.',
        '2': 'Get all the free education you need to become a better trader. Whether you`re beginner or an expect, wucation webinars, videos, and courses; you name it, we`ll have it.',
        '3': 'Get all the free education you need to become a better trader. Whether you`re beginner or an expect, wucation webinars, video.'
    }
    const keys = Object.keys(cardText);

    return (
        <section className="py-32 max-w-[1280px] mx-auto flex flex-col gap-20">
            <div className="flex flex-row items-center justify-between">
                <h2 className="font-medium text-[44px] leading-[52.28px] max-w-[621px]">Trade Smarter with Our trading
                    Tools</h2>
                <p className="text-[16px] leading-[19.2px] max-w-[476px]">Are you ready to reach a new level in the
                    world of investments and earn serious money in the
                    financial markets? Then you definitely need to take a closer look at our tariff offers!</p>
            </div>
            <div className="flex flex-col gap-4">
                <ul className="flex flex-row gap-3">
                    <li className="rounded-3xl relative bg-customBlue cursor-pointer"
                        onMouseEnter={() => setHoveredIndex('0')} onClick={() => setIsClickedCard('0')}
                        onMouseLeave={() => setHoveredIndex(null)}>
                        {isClickedCard === '0' ? "" : <div
                            className="rounded-3xl bg-customBlue absolute top-0 left-0 w-full h-full z-20 opacity-40"></div>}
                        {isClickedCard === '0' ?
                            <div
                                className="flex flex-row pl-8 pb-[51px] gap-6 bg-custom-gradient-four rounded-t-3xl left-0 absolute top-0 mx-auto pt-8 z-30 w-full">
                                <div
                                    className="flex items-center justify-center h-[46px] w-[46px] rounded-[100px] bg-customOrangeEight">
                                    <Image src="arrowgroup.svg" alt="arrow" width={22} height={16}/>
                                </div>
                                <p className="font-semibold text-[44px] leading-[52.8px] text-white">Academy</p>
                            </div> :
                            <div
                                className={`absolute top-0 mx-auto pt-8 z-30 ${hoveredIndex === '0' ? 'left-[43%]' : 'left-5'}`}>
                                <div
                                    className={`flex items-center justify-center h-[46px] w-[46px]  rounded-[100px] ${hoveredIndex === '0' ? 'bg-customOrangeEight' : 'bg-customBlueFive'}`}>
                                    <Image src="arrowgroup.svg" alt="arrow" width={22} height={16}/>
                                </div>
                            </div>
                        }
                        <Image src="academy.svg" alt="academy"
                               width={isClickedCard === '0' ? 812 : (hoveredIndex === '0' ? 204 : 94)} height={492}
                               className="object-cover rounded-3xl h-full"/>
                    </li>
                    <li className="rounded-3xl relative bg-customBlue cursor-pointer"
                        onMouseEnter={() => setHoveredIndex('1')} onClick={() => setIsClickedCard('1')}
                        onMouseLeave={() => setHoveredIndex(null)}>
                        {isClickedCard === '1' ? "" : <div
                            className="rounded-3xl bg-customBlue absolute top-0 left-0 w-full h-full z-20 opacity-40"></div>}
                        {isClickedCard === '1' ?
                            <div
                                className="flex flex-row pl-8 pb-[51px] gap-6 bg-custom-gradient-four rounded-t-3xl left-0 absolute top-0 mx-auto pt-8 z-30 w-full">
                                <div
                                    className="flex items-center justify-center h-[46px] w-[46px] rounded-[100px] bg-customOrangeEight">
                                    <Image src="arrowgroup.svg" alt="arrow" width={22} height={16}/>
                                </div>
                                <p className="font-semibold text-[44px] leading-[52.8px] text-white">Tools</p>
                            </div> :
                            <div
                                className={`absolute top-0 mx-auto pt-8 z-30 ${hoveredIndex === '1' ? 'left-[43%]' : 'left-5'}`}>
                                <div
                                    className={`flex items-center justify-center h-[46px] w-[46px]  rounded-[100px] ${hoveredIndex === '1' ? 'bg-customOrangeEight' : 'bg-customBlueFive'}`}>
                                    <Image src="arrowgroup.svg" alt="arrow" width={22} height={16}/>
                                </div>
                            </div>
                        }
                        <Image src="academy.svg" alt="academy"
                               width={isClickedCard === '1' ? 812 : (hoveredIndex === '1' ? 204 : 94)} height={492}
                               className="object-cover rounded-3xl h-full"/>
                    </li>
                    <li className="rounded-3xl relative bg-customBlue cursor-pointer"
                        onMouseEnter={() => setHoveredIndex('2')} onClick={() => setIsClickedCard('2')}
                        onMouseLeave={() => setHoveredIndex(null)}>
                        {isClickedCard === '2' ? "" : <div
                            className="rounded-3xl bg-customBlue absolute top-0 left-0 w-full h-full z-20 opacity-40"></div>}
                        {isClickedCard === '2' ?
                            <div
                                className="flex flex-row pl-8 pb-[51px] gap-6 bg-custom-gradient-four rounded-t-3xl left-0 absolute top-0 mx-auto pt-8 z-30 w-full">
                                <div
                                    className="flex items-center justify-center h-[46px] w-[46px] rounded-[100px] bg-customOrangeEight">
                                    <Image src="arrowgroup.svg" alt="arrow" width={22} height={16}/>
                                </div>
                                <p className="font-semibold text-[44px] leading-[52.8px] text-white">Market</p>
                            </div> :
                            <div
                                className={`absolute top-0 mx-auto pt-8 z-30 ${hoveredIndex === '2' ? 'left-[43%]' : 'left-5'}`}>
                                <div
                                    className={`flex items-center justify-center h-[46px] w-[46px]  rounded-[100px] ${hoveredIndex === '2' ? 'bg-customOrangeEight' : 'bg-customBlueFive'}`}>
                                    <Image src="arrowgroup.svg" alt="arrow" width={22} height={16}/>
                                </div>
                            </div>
                        }
                        <Image src="academy.svg" alt="academy"
                               width={isClickedCard === '2' ? 812 : (hoveredIndex === '2' ? 204 : 94)} height={492}
                               className="object-cover rounded-3xl h-full"/>
                    </li>
                    <li className="rounded-3xl relative bg-customBlue cursor-pointer"
                        onMouseEnter={() => setHoveredIndex('3')} onClick={() => setIsClickedCard('3')}
                        onMouseLeave={() => setHoveredIndex(null)}>
                        {isClickedCard === '3' ? "" : <div
                            className="rounded-3xl bg-customBlue absolute top-0 left-0 w-full h-full z-20 opacity-40"></div>}
                        {isClickedCard === '3' ?
                            <div
                                className="flex flex-row pl-8 pb-[51px] gap-6 bg-custom-gradient-four rounded-t-3xl left-0 absolute top-0 mx-auto pt-8 z-30 w-full">
                                <div
                                    className="flex items-center justify-center h-[46px] w-[46px] rounded-[100px] bg-customOrangeEight">
                                    <Image src="arrowgroup.svg" alt="arrow" width={22} height={16}/>
                                </div>
                                <p className="font-semibold text-[44px] leading-[52.8px] text-white">Tools</p>
                            </div> :
                            <div
                                className={`absolute top-0 mx-auto pt-8 z-30 ${hoveredIndex === '3' ? 'left-[43%]' : 'left-5'}`}>
                                <div
                                    className={`flex items-center justify-center h-[46px] w-[46px]  rounded-[100px] ${hoveredIndex === '3' ? 'bg-customOrangeEight' : 'bg-customBlueFive'}`}>
                                    <Image src="arrowgroup.svg" alt="arrow" width={22} height={16}/>
                                </div>
                            </div>
                        }
                        <Image src="academy.svg" alt="academy"
                               width={isClickedCard === '3' ? 812 : (hoveredIndex === '3' ? 204 : 94)} height={492}
                               className="object-cover rounded-3xl h-full"/>
                    </li>
                </ul>
                {keys.map((key, index) => (
                    key === isClickedCard && (
                        <p key={key} className="border-l-[3px] border-l-solid border-l-customOrangeSeven py-2.5 pl-6 pr-2.5 font-medium text-[20px] leading-[24px]">
                            {cardText[key]}
                        </p>
                    )
                ))}
            </div>
        </section>
    )
}

export default Tools;