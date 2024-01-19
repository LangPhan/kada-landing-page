import CircleCTA from "./CircleCTA";
import Marquee from "./Marquee";
import WelcomeText from "./WelcomeText";

export default function HeroBannerSection() {
  return (
    <section id="hero" rel="preload" className="bg-hero bg-cover">
      <div className="pt-64">
        <div className="flex flex-col gap-14 px-6 lg:px-12 2xl:px-[6rem] 2xl:pt-20">
          <WelcomeText />
          <CircleCTA />
        </div>
        <Marquee content={"Better gifting? Big sleigh"} />
      </div>
    </section>
  );
}
