import BestSeller from "./components/BestSeller";
import Category from "./components/Category";
import Classic from "./components/Classic";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gravity from "./components/Gravity";
import Header from "./components/Header";
import HeroBannerSection from "./components/HeroBanner";

export default function Home() {
  return (
    <main className="background-wrapper min-h-screen">
      <Header />
      <HeroBannerSection />
      <Category />
      <BestSeller />
      <Gravity />
      <Classic />
      <Contact />
      <Footer />
    </main>
  );
}
