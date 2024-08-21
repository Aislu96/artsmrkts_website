import Banner from "@/app/banner";
import Dialogue from "@/app/dialogue";
import Trade from "@/app/trade";
import AccountTypes from "@/app/accountTypes";
import MarketTrends from "@/app/marketTrends";
import Tools from "@/app/tools";

export default function Home() {
    return (
        <main className="relative">
            <Dialogue/>
            <Banner/>
            <Trade/>
            <AccountTypes/>
            <Tools />
            <MarketTrends />
        </main>
    );
}
