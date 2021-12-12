import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { discountPrice } from "../../helpers/discount-func";
import classes from "./product.module.css";
function ProductDetailPage(props) {
  const { image, price, title, description } = props.product;
  return (
    <div className={classes.productDetailContainer}>
      <div className={classes.productDetailWrapper}>
        <div className={classes.ProductImgBox}>
          <img src={"/" + image} alt={title} className={classes.productImg} />
        </div>
        <div className={classes.productDetail}>
          <div>
            <h3 className={classes.productTitle}>{title}</h3>
            <div className={classes.productPriceBox}>
              <h4 className={classes.productPrice}>${price}</h4>
              <h4 className={classes.productDisPrice}>
                ${discountPrice(20, price)}
              </h4>
            </div>
            <p>{description}</p>
          </div>
          <div className={classes.btnBox}>
            <div className={classes.quantityBox}>
              <FontAwesomeIcon icon={faMinus} />
              <span>1</span>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <button className={classes.addBtn}>Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailPage;
