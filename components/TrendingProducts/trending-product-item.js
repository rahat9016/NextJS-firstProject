import { useRouter } from "next/router";
import { discountPrice } from "../../helpers/discount-func";
import classes from "./trending-product-item.module.css";
function TrendingProduct(props) {
  const { title, price, image, id } = props.product;

  const router = useRouter();
  const productHandler = (id) => {
    const fullPath = `/product/${id}`;
    router.push(fullPath);
  };
  return (
    <div className={classes.productBox}>
      <div className={classes.trendingProductImgBox}>
        <img src={"/" + image} alt={title} />
        <div className={classes.productButton}>
          <button onClick={() => productHandler(id)} className={classes.btnBuy}>
            Buy now
          </button>
          <button className={classes.btnAdd}>Add to card</button>
        </div>
      </div>

      <div>
        <h3 className={classes.trendingProductTitle}>{title}</h3>
        <div className={classes.trendingPrice}>
          <h5 className={classes.trendingProductPrice}>${price}</h5>
          <h5 className={classes.trendingProductDiscountPrice}>
            ${discountPrice(20, price)}
          </h5>
        </div>
      </div>
    </div>
  );
}
export default TrendingProduct;
