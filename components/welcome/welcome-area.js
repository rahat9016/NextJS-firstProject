import classes from "./welcome-area.module.css";
function WelcomeArea() {
  return (
    <section className={classes.welcomeContainer}>
      <div className={classes.welcomeWrapper}>
        <div className={classes.welcomeContent}>
          <h1>Welcome to Kalles Decor</h1>
          <p>
            With one of the worlds largest online selections of furniture, home
            $
            <br />
            furnishings, décor and goods, <br />
            including more than ten million products from over 10,000 suppliers
          </p>
        </div>
      </div>
    </section>
  );
}
export default WelcomeArea;
