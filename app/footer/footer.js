'use client';
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

const Footer = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    return (
        <footer className="bg-custom-gradient-two">
            <div className="max-w-[1240px] mx-auto pt-[100px] pb-[91px] px-4">
                <div className="flex flex-row gap-2.5 mb-16">
                    <Link href="/" rel="noopener noreferrer">
                        <Image src="logo.svg" alt="logo" width={67} height={46} className="object-contain"/>
                    </Link>
                    <p className="text-customBlackOne text-[20px] leading-[24px] font-semibold w-40">The best forex
                        broker</p>
                </div>
                <div className="mb-[101px]">
                    <div className="flex flex-row gap-11">
                        <div className="flex flex-col justify-between gap-8 flex-1">
                            <div className="flex flex-row gap-4">
                                <div className="flex flex-col w-[111px]">
                                    <p className="text-customBlueFour text-[16px] leading-[19.2px] font-bold pb-4">Company</p>
                                    <div className="h-[1px] w-full bg-customBlueFour"></div>
                                </div>
                                <ul className=" flex flex-col gap-2">
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Trading
                                        account
                                        types</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Deposit and
                                        withdrawal</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">VPS
                                        hosting</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Contact
                                        specifications</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Trading
                                        hours</Link></li>
                                </ul>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className="flex flex-col">
                                    <p className="text-customBlueFour text-[16px] leading-[19.2px] font-bold pb-4">Markets
                                        & Tools</p>
                                    <div className="h-[1px] w-full bg-customBlueFour"></div>
                                </div>
                                <ul className=" flex flex-col gap-2">
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Trading
                                        account
                                        types</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Deposit and
                                        withdrawal</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">VPS
                                        hosting</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Contact
                                        specifications</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Trading
                                        hours</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-8 flex-1">
                            <div className="flex flex-row gap-4">
                                <div className="flex flex-col">
                                    <p className="text-customBlueFour text-[16px] leading-[19.2px] font-bold pb-4">Trading</p>
                                    <div className="h-[1px] w-full bg-customBlueFour"></div>
                                </div>
                                <ul className=" flex flex-col gap-2">
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Trading
                                        account
                                        types</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Deposit and
                                        withdrawal</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">VPS
                                        hosting</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Contact
                                        specifications</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Margin
                                        requirements & Leverage rules</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Trading
                                        hours</Link></li>
                                </ul>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className="flex flex-col">
                                    <p className="text-customBlueFour text-[16px] leading-[19.2px] font-bold pb-4">Markets</p>
                                    <div className="h-[1px] w-full bg-customBlueFour"></div>
                                </div>
                                <ul className="flex flex-col gap-2">
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Trading
                                        account
                                        types</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Deposit and
                                        withdrawal</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Contact
                                        specifications</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Trading
                                        hours</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between flex-1">
                            <div className="flex flex-row gap-4">
                                <div className="flex flex-col">
                                    <p className="text-customBlueFour text-[16px] leading-[19.2px] font-bold pb-4">Platform</p>
                                    <div className="h-[1px] w-full bg-customBlueFour"></div>
                                </div>
                                <ul className=" flex flex-col gap-2">
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Trading
                                        account
                                        types</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Deposit and
                                        withdrawal</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">VPS
                                        hosting</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Contact
                                        specifications</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Margin
                                        requirements & Leverage rules</Link></li>
                                    <li><Link href="/" rel="noopener noreferrer"
                                              className="text-customBlackOne text-[14px] leading-[16.8px]">Trading
                                        hours</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-11">
                            <Link href="/" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                                <Image src="apple.svg" alt="apple" width={30} height={30} className="object-contain"/>
                                <span className="text-[16px] leading-[19.2px] text-customBlackFour">Apple Store</span>
                            </Link>
                            <Link href="/" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                                <Image src="google.svg" alt="google" width={30} height={30} className="object-contain"/>
                                <span className="text-[16px] leading-[19.2px] text-customBlackFour">Google Play</span>
                            </Link>
                            <Link href="/" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                                <Image src="android.svg" alt="android" width={30} height={30} className="object-contain"/>
                                <span className="text-[16px] leading-[19.2px] text-customBlackFour whitespace-nowrap">Android APK</span>
                            </Link>
                        </div>
                        <div className="my-auto pt-[60px]">
                            <Image src="qrcodetwo.svg" alt="qrcodetwo" width={60} height={61} className="object-contain"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-9 mb-[101px]">
                    <div className="flex flex-col w-[88px]">
                        <p className="text-customBlueFour text-[16px] leading-[19.2px] font-bold pb-4">Legal </p>
                        <div className="h-[1px] w-full bg-customBlueFour"></div>
                    </div>
                    <ul className=" flex flex-col gap-2">
                        <li className="text-customBlackOne text-[12px] leading-[14.4px]">Just Global Markets Ltd., registration number 8427198-1, address: Office 10, Floor 2, Vairam Building, Providence Industrial Estate, Providence, Mahe, Seychelles, a company regulated by the Seychelles Financial Services Authority (FSA) under a Securities Dealer License number SD088.</li>
                        <li className="text-customBlackOne text-[12px] leading-[14.4px]">Just Global Markets (MU) Limited, registration number 194590 GBC, address: The Cyberati Lounge, C/o Credentia International Management Ltd, Ground Floor, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebène, Republic of Mauritius, an Investment Dealer (Full Service Dealer, Excluding Underwriting) regulated by the Financial Services Commission (FSC) in Mauritius under a License number GB22200881.</li>
                        <li className="text-customBlackOne text-[12px] leading-[14.4px]">GMFT Services Ltd, registration number HE 424491, address: Syrakouson 9, Office 106, 3077, Limassol, Cyprus, is the EU merchant company, which provides certain content and operates the business including in terms of processing payment transactions.</li>
                        <li className="text-customBlackOne text-[12px] leading-[14.4px]">Risk Warning: CFDs are complex instruments and come with a high risk of losing funds rapidly due to leverage.</li>
                        <li className="text-customBlackOne text-[12px] leading-[14.4px]">The vast majority of retail investors face losses when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your deposit. To ensure that you fully understand the risks associated with margin trading, pay attention to our Risk Disclosure.</li>
                        <li className="text-customBlackOne text-[12px] leading-[14.4px]">Restricted Jurisdictions: JustMarkets does not offer and does not provide services to residents and citizens of certain jurisdictions, including Australia, Canada, the EU and EEA, Japan, the United Kingdom, the United States of America, and countries sanctioned by the EU.</li>
                        <li className="text-customBlackOne text-[12px] leading-[14.4px]">¹At JustMarkets, most of withdrawals are processed instantly (under 1 minute). Once your funds leave our custody, it's up to your chosen payment provider to process the funds and credit your account.</li>
                    </ul>
                </div>
                <div className="flex flex-row justify-between border-t-[1px] border-customBlueFour pt-11">
                    <ul className=" flex flex-row gap-11">
                        <li><Link href="/" rel="noopener noreferrer" className="text-customBlackOne text-[14px] leading-[16.8px]">Risk Disclosure</Link></li>
                        <li><Link href="/" rel="noopener noreferrer" className="text-customBlackOne text-[14px] leading-[16.8px]">Privacy Policy</Link></li>
                        <li><Link href="/" rel="noopener noreferrer" className="text-customBlackOne text-[14px] leading-[16.8px]">AML Policy</Link></li>
                        <li><Link href="/" rel="noopener noreferrer" className="text-customBlackOne text-[14px] leading-[16.8px]">Sitemap</Link></li>
                    </ul>
                    <ul className="flex flex-row gap-2">
                        <li>
                            <Link href="/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={hoveredIcon === 'facebook' ? "facebookHover.svg" : "facebook.svg"}
                                    alt="facebook"
                                    width={24}
                                    height={24}
                                    className={`rounded-lg cursor-pointer ${hoveredIcon === 'facebook' ? 'box-shadow-icon' : ''} object-contain`}
                                    onMouseEnter={() => setHoveredIcon('facebook')}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={hoveredIcon === 'instagram' ? "instagramHover.svg" : "instagram.svg"}
                                    alt="instagram"
                                    width={24}
                                    height={24}
                                    className={`rounded-lg cursor-pointer ${hoveredIcon === 'instagram' ? 'box-shadow-icon' : ''} object-contain`}
                                    onMouseEnter={() => setHoveredIcon('instagram')}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={hoveredIcon === 'in' ? "inHover.svg" : "in.svg"}
                                    alt="in"
                                    width={24}
                                    height={24}
                                    className={`rounded-lg cursor-pointer ${hoveredIcon === 'in' ? 'box-shadow-icon' : ''} object-contain`}
                                    onMouseEnter={() => setHoveredIcon('in')}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={hoveredIcon === 'telegram' ? "telegramHover.svg" : "telegram.svg"}
                                    alt="telegram"
                                    width={24}
                                    height={24}
                                    className={`rounded-lg cursor-pointer ${hoveredIcon === 'telegram' ? 'box-shadow-icon' : ''} object-contain`}
                                    onMouseEnter={() => setHoveredIcon('telegram')}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={hoveredIcon === 'unix' ? "unixHover.svg" : "unix.svg"}
                                    alt="unix"
                                    width={24}
                                    height={24}
                                    className={`rounded-lg cursor-pointer ${hoveredIcon === 'unix' ? 'box-shadow-icon' : ''} object-contain`}
                                    onMouseEnter={() => setHoveredIcon('unix')}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;