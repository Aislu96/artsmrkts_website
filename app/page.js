import Banner from "@/app/banner";
import Dialogue from "@/app/dialogue";
import Slider from "@/app/slider";
import Trade from "@/app/trade";

export default function Home() {
    return (
        <main className="relative">
            <Dialogue/>
            <Banner/>
            {/*<Slider />*/}
            <Trade />
        </main>
    );
}
