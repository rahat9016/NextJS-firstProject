import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./top-bar.module.css";
function TopBar() {
  return (
    <div className={classes.topBar}>
      <div className={classes.infoContainer}>
        <div className={classes.infoIconBox}>
          <FontAwesomeIcon icon={faPhone} />
          <p>+01 23456789 </p>
        </div>
        <div className={classes.infoIconBox}>
          <FontAwesomeIcon icon={faEnvelope} />
          <p> admin@gmail.com </p>
        </div>
      </div>
      {/* Discount Offer SMS */}
      <div className={classes.discountContainer}>
        <p>
          <small>
            Summer sale discount off
            <span className={classes.discountNumber}>50%!</span> Shop Now
          </small>
        </p>
      </div>
      {/* Location Area */}
      <div className={classes.locationContainer}>
        <div className={classes.locationIconBox}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <p>Location</p>
        </div>
        <div>
          <select className={classes.languageSelect}>
            <option>English</option>
            <option>Bengal</option>
          </select>
        </div>
        <div className={classes.countryName}>
          <select className={classes.countrySelect}>
            <option>Bangladesh</option>
            <option>USA</option>
            <option>UK</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
