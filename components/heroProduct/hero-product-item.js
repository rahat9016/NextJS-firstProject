import classes from "./hero-product-item.module.css";
function HeroProductItem(props) {
  const { title, image } = props.product;
  return (
    <div
      className={classes.productItem}
      style={{
        backgroundImage: "url(" + "/" + `${image}` + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className={classes.productTitle}>{title}</h2>
      <button className={classes.btnHeroProduct}>Buy now</button>
    </div>
  );
}
export default HeroProductItem;
