import { faCar, faGem, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./services.module.css";
function Services() {
  return (
    <section>
      <div className={classes.servicesContainer}>
        <div className={classes.servicesWrapper}>
          <div className={classes.servicesBox}>
            <div className={classes.servicesItem}>
              <FontAwesomeIcon icon={faCar} />
              <h3>FREE SHIPPING</h3>
              <h5>Whether its a sofa deliverys on the house.</h5>
            </div>
            <div className={classes.servicesItem}>
              <FontAwesomeIcon icon={faGem} />
              <h3>PREMIUM DESIGN</h3>
              <h5>Shop zillions of finds, with new arrivals added daily.</h5>
            </div>
            <div className={classes.servicesItem}>
              <FontAwesomeIcon icon={faGift} />
              <h3>BEAUTIFUL GIFT WRAPPING</h3>
              <h5>Use the Credit Card to save on your order over $50.</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
