import { useRouter } from "next/router";
import classes from "./trending-product-item.module.css";
function TrendingProduct(props) {
  const { title, price, image, id } = props.product;
  const discountPrice = (discount, price) => {
    const discountAmount = discount / 100;
    const totalAmount = price - price * discountAmount;
    return totalAmount;
  };
  const router = useRouter();
  const productHandler = (id) => {
    const fullPath = `/product/${id}`;
    router.push(fullPath);
  };
  return (
    <div onClick={() => productHandler(id)} className={classes.productBox}>
      <div className={classes.trendingProductImgBox}>
        <img src={"/" + image} alt={title} />
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
