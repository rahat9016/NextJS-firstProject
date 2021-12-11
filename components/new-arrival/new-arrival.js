import { getArrivalProducts } from "../../dummy-data";
import NewArrivalItem from "./new-arrival-item";
import classes from "./new-arrival.module.css";
function NewArrival() {
  const arrivalProducts = getArrivalProducts();
  return (
    <section>
      <div className={classes.newArrivalContainer}>
        <div className={classes.arrivalContentBox}>
          <h1 className={classes.arrivalTitle}>New Arrival</h1>
          <p className={classes.arrivalDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum <br />
            has been the industry standard dummy text ever since the 1500s
          </p>
        </div>
        <div className={classes.arrivalProduct}>
          {arrivalProducts.map((product) => (
            <NewArrivalItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default NewArrival;
