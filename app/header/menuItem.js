import Image from "next/image";
import Link from "next/link";

const MenuItem = ({ label, isActive, handleClick, links = [] }) => {
    return (
        <div className="relative">
            <div
                onClick={handleClick}
                className={`flex flex-row items-center px-4 py-2 gap-3 cursor-pointer ${
                    isActive ? 'bg-customOrangeBg rounded-[44px]' : ''
                }`}
            >
                <div className="flex flex-row items-center">
                    <span
                        className={`text-[16px] leading-[19.2px]  ${isActive ? 'text-customRedText' : ''}`}>{label}</span>
                </div>
                <div className="w-2.5 h-2.5 flex items-center justify-center">
                    <Image
                        src={isActive ? "arrowRed.svg" : "arrow.svg"}
                        alt="arrow"
                        width={7}
                        height={4}
                        className={`object-contain transition-transform ${
                            isActive ? "rotate-180" : ""
                        }`}
                    />
                </div>
            </div>

            {isActive && (
                <div className="absolute top-[43px] left-0 box-shadow rounded-lg flex flex-col w-full bg-white z-10">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} rel="noopener noreferrer" className="px-4 py-1 hover:text-customOrange active:text-customRedText border-bottom">
                            <span className="text-[14px] leading-[16.8px]">{link.text}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuItem;
