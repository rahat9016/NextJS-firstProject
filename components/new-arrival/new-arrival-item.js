import { Fragment } from "react";
import classes from "./new-arrival-item.module.css";

function NewArrivalItem(props) {
  const { title, image, price } = props.product;
  const discountPrice = (discount, price) => {
    const discountAmount = discount / 100;
    const totalAmount = price - price * discountAmount;
    return totalAmount;
  };

  return (
    <Fragment>
      <div>
        <div className={classes.arrivalItemBox}>
          <img src={"/" + image} alt={title} />
        </div>
        <div className={classes.arrivalItemContent}>
          <h4>{title}</h4>
          <div className={classes.price}>
            <h5 className={classes.itemPrice}>${price}</h5>
            <h5>${discountPrice(40, price)}</h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default NewArrivalItem;
