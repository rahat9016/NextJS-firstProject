import {
  faBars,
  faHeart,
  faSearch,
  faShoppingCart,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import classes from "./main-header.module.css";

function MainHeader() {
  const [menuClick, setMenuClick] = useState(false);
  const [cartClick, setCartClick] = useState(false);
  const handleMenuClick = () => {
    setMenuClick(!menuClick);
  };
  const handleCartClick = () => {
    setCartClick(!cartClick);
    console.log(cartClick);
  };

  return (
    <header>
      <div className={classes.mainHeader}>
        <div className={classes.logo}>
          <Link href="/">
            <h2>Logo</h2>
          </Link>
        </div>

        <nav className={menuClick ? classes.active : classes.deactive}>
          <ul className={classes.menuUL}>
            <li className={classes.menuItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={classes.menuItem}>
              <Link href="#product">Products</Link>
            </li>
            <li className={classes.menuItem}>
              <Link href="#trending">Trending</Link>
            </li>
            <li className={classes.menuItem}>
              <Link href="/top-seller">Top Seller</Link>
            </li>
            <li className={classes.menuItem}>
              <Link href="/latest">Latest </Link>
            </li>
          </ul>
        </nav>
        {/* Card Information Section */}
        <div>
          <ul className={classes.icons}>
            <li>
              <Link href="/">
                <FontAwesomeIcon className={classes.icon} icon={faSearch} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FontAwesomeIcon className={classes.icon} icon={faUser} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FontAwesomeIcon className={classes.icon} icon={faHeart} />
              </Link>
            </li>
            <li>
              <Link href="">
                <FontAwesomeIcon
                  onClick={handleCartClick}
                  className={classes.icon}
                  icon={faShoppingCart}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={handleMenuClick} className={classes.menuBar}>
          <FontAwesomeIcon icon={menuClick ? faTimes : faBars} />
        </div>
      </div>
    </header>
  );
}
export default MainHeader;
