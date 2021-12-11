import Footer from "../components/footer/footer";
import Hero from "../components/Hero/hero";
import HeroProducts from "../components/heroProduct/heroProducts";
import NewArrival from "../components/new-arrival/new-arrival";
import Services from "../components/services/services";
import TrendingProducts from "../components/TrendingProducts/trending-products";
import WelcomeArea from "../components/welcome/welcome-area";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeroProducts />
      <NewArrival />
      <WelcomeArea />
      <Services />
      <TrendingProducts />
      <Footer />
    </div>
  );
}
