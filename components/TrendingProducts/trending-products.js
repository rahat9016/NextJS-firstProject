import { useEffect, useState } from "react";
import { getTrendingProducts } from "../../dummy-data";
import { getIsFeatured } from "../../helpers/api-util";
import TrendingProduct from "./trending-product-item";
import classes from "./trending-products.module.css";
function TrendingProducts(props) {
  const [productsItem, serProductsItem] = useState([]);
  const products = getTrendingProducts();
  useEffect(() => {
    fetch(
      "https://next-project-by-rahat-default-rtdb.firebaseio.com/products.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const products = [];

        for (const key in data) {
          products.push({
            id: key,
            ...data[key],
          });
        }
        if (products.length > 1) {
          serProductsItem(products);
        } else {
          return <p>Loading...</p>;
        }
      });
  }, []);
  // console.log(productsItem);
  return (
    <section>
      <div className={classes.trendingContainer}>
        <div className={classes.trendingWrapper}>
          <div className={classes.trendingCaption}>
            <h2 className={classes.trendingTitle}>Trending Products</h2>
            <p>Get through all trending products and get your best deal</p>
          </div>
          <div className={classes.trendingProductItemContainer}>
            {productsItem?.map((product) => (
              <TrendingProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export async function getStaticProps() {
  const products = getIsFeatured();
  return {
    props: {
      products: products,
    },
  };
}
export default TrendingProducts;
