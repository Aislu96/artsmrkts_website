import BannerBonus from "../bannerBonus";

export default function Page() {
    return (
        <main className="relative">
            <BannerBonus
                imageSrc="/safe.png"
                imageAlt="safe"
                title="Open the Forex trading journey for friends and claim up to"
                highlightText="$2000"
                buttonText="Get the bonus"
                linkHref="/bonus"
            />
        </main>
    );
}
