import Footer from "../components/footer/footer";
import Hero from "../components/Hero/hero";
import HeroProducts from "../components/heroProduct/heroProducts";
import NewArrival from "../components/new-arrival/new-arrival";
import Services from "../components/services/services";
import TrendingProducts from "../components/TrendingProducts/trending-products";
import WelcomeArea from "../components/welcome/welcome-area";
import { getTrendingProducts } from "../helpers/api-util";

function Home(props) {
  const products = props.products;
  return (
    <div>
      <Hero />
      <HeroProducts />
      <NewArrival />
      <WelcomeArea />
      <Services />
      <TrendingProducts products={products} />
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const trendingProducts = await getTrendingProducts();
  return {
    props: {
      products: trendingProducts,
    },
  };
}
export default Home;
