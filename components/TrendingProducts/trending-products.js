import { getIsFeatured } from "../../helpers/api-util";
import TrendingProduct from "./trending-product-item";
import classes from "./trending-products.module.css";
function TrendingProducts(props) {
  return (
    <section>
      <div className={classes.trendingContainer}>
        <div className={classes.trendingWrapper}>
          <div className={classes.trendingCaption}>
            <h2 className={classes.trendingTitle}>Trending Products</h2>
            <p>Get through all trending products and get your best deal</p>
          </div>
          <div className={classes.trendingProductItemContainer}>
            {props.products?.map((product) => (
              <TrendingProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export async function getStaticProps() {
  const products = await getIsFeatured();
  return {
    props: {
      products: products,
    },
  };
}
export default TrendingProducts;
