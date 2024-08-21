import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {useState} from "react";

const MenuItem = ({ label, isActive, handleClick, links = [] }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="relative"
        >
            <div
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`flex flex-row items-center px-4 py-2 gap-3 cursor-pointer ${
                    isActive ? 'bg-customOrangeFour rounded-[44px]' : 'bg-white'
                }`}
            >
                <div className="flex flex-row items-center">
                   <span
                       className={`text-[16px] leading-[19.2px] transition-colors duration-300 ease-in-out ${
                           isActive || isHovered ? 'text-customRedText' : 'text-customBlackFour'
                       }`}
                   >
                        {label}
                    </span>
                </div>
                <div className="w-2.5 h-2.5 flex items-center justify-center">
                    <Image
                        src={isActive || isHovered ? "arrowRed.svg" : "arrow.svg"}
                        alt="arrow"
                        width={7}
                        height={4}
                        className={`object-contain transition-transform ${isActive ? "rotate-180" : ""}`}
                    />
                </div>
            </div>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="absolute top-[43px] left-0 box-shadow rounded-lg flex flex-col w-full bg-white z-30"
                        initial={{ opacity: 0, height: 0 }} // Начальное состояние
                        animate={{ opacity: 1, height: "auto" }} // Анимация при появлении
                        exit={{ opacity: 0, height: 0 }} // Анимация при исчезновении
                        transition={{ duration: 0.3 }} // Длительность анимации
                    >
                        {links.map((link, index) => (
                            <Link key={index} href={link.href} rel="noopener noreferrer"
                                  className="px-4 py-1 hover:text-customOrange active:text-customOrangeFive border-bottom">
                                <span className="text-[14px] leading-[16.8px]">{link.text}</span>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MenuItem;
