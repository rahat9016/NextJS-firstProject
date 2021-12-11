import { getHeroProducts } from "../../dummy-data";
import HeroProductItem from "./hero-product-item";
import classes from "./heroProduct.module.css";
function HeroProducts() {
  const heroProducts = getHeroProducts();

  return (
    <section className={classes.heroProductSection}>
      <div className={classes.heroProductContainer}>
        {heroProducts.map((product) => (
          <HeroProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
export default HeroProducts;
