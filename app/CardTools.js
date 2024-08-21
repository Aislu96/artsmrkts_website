import Image from "next/image";

const CardTools = ({ id, title, imageSrc, isActive, isHovered, onClick, onHover, onLeave }) => {
    return (
        <li
            className="rounded-3xl relative bg-customBlue cursor-pointer overflow-hidden"
            onMouseEnter={() => onHover(id)}
            onClick={() => onClick(id)}
            onMouseLeave={onLeave}
        >
            {!isActive && <div className="rounded-3xl bg-customBlue absolute top-0 left-0 w-full h-full z-20 opacity-40"></div>}
            {isActive ? (
                <div className="flex flex-row pl-8 pb-[51px] gap-6 bg-custom-gradient-four rounded-t-3xl left-0 absolute top-0 mx-auto pt-8 z-30 w-full">
                    <div className="flex items-center justify-center h-[46px] w-[46px] rounded-[100px] bg-customOrangeEight">
                        <Image src="arrowgroup.svg" alt="arrow" width={22} height={16} />
                    </div>
                    <p className="font-semibold text-[44px] leading-[52.8px] text-white">{title}</p>
                </div>
            ) : (
                <div className={`absolute top-0 mx-auto pt-8 z-30 transition-all duration-500 ease-in-out ${isHovered ? 'left-[43%]' : 'left-5'}`}>
                    <div className={`flex items-center justify-center h-[46px] w-[46px] rounded-[100px] ${isHovered ? 'bg-customOrangeEight' : 'bg-customBlueFive'}`}>
                        <Image src="arrowgroup.svg" alt="arrow" width={22} height={16} />
                    </div>
                </div>
            )}
            <Image
                src={imageSrc}
                alt={title}
                width={isActive ? 812 : (isHovered ? 204 : 94)}
                height={492}
                className={`object-cover rounded-3xl h-full transition-all duration-500 ease-in-out`}
            />
        </li>
    );
};


export default CardTools;
