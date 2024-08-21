import Image from "next/image";

const CardMarketTrends = ({ id, imageSrc, badge, title, description, isHoveredCard, onMouseEnter, onMouseLeave }) => {
    return (
        <div
            className={`rounded-2xl relative cursor-pointer ${isHoveredCard === id ? 'box-shadow-three' : ''}`}
            onMouseEnter={() => onMouseEnter(id)}
            onMouseLeave={onMouseLeave}
        >
            {badge && (
                <div className="flex justify-center items-center py-2 px-4 rounded-[100px] bg-customOrangeSix h-[27px] w-max absolute -top-3.5 right-7">
                    <span className="text-[16px] leading-[19.2px] text-white">{badge}</span>
                </div>
            )}
            <Image src={imageSrc} alt={id} width={304} height={368} className="rounded-2xl" />
            <div
                className={`px-4 pt-4 flex flex-col gap-2 rounded-2xl bg-custom-gradient-three absolute bottom-0 left-0 w-full ${isHoveredCard === id ? 'pb-20' : 'pb-8'} transition-all duration-300 ease-in-out`}
            >
                <p className="font-medium text-[24px] leading-[28.8px] text-white">{title}</p>
                <p className="text-[16px] leading-[19.2px] text-white">{description}</p>
            </div>
        </div>
    );
};

export default CardMarketTrends;