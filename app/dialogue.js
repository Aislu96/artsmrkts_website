import Image from "next/image";

const Dialogue = () => {
    return (
        <div
        className="fixed z-50 bottom-20 right-16 w-[60px] h-[60px] bg-customOrangeTwo flex justify-center rounded-[100px] box-shadow-two cursor-pointer hover:customOrange active:customOrangeThree">
        <Image src="dialogue.svg" alt="dialogue" width={36} height={36} className="object-contain"/>
    </div>);
}

export default Dialogue;