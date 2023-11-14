import Category from "./components/Category";
import Header from "./components/Header";
import HeroBannerSection from "./components/HeroBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroBannerSection />
      <Category />
    </main>
  );
}
