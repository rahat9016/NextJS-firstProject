import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../ui/button";
import classes from "./hero.module.css";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
function Hero() {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={classes.heroBox}>
            <div className="main-wrapper">
              <div className={classes.heroItem}>
                <h3 className={classes.title}>HOT PRODUCT</h3>
                <h2 className={classes.headTitle}>
                  Koppel 22cm <br /> Wall Clock
                </h2>
                <Button>Shop now</Button>
              </div>
            </div>
            <img
              src={`https://cdn.shopify.com/s/files/1/0328/0961/5495/files/slide1_bbf97104-9367-4953-b6c5-22e773684299_1950x.jpg?v=1610513372`}
              className={classes.heroBg}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.heroBox}>
            <div className="main-wrapper">
              <div className={classes.heroItem}>
                <h3 className={classes.title}>HOT PRODUCT</h3>
                <h2 className={classes.headTitle}>
                  Koppel 22cm <br /> Wall Clock
                </h2>
                <Button>Shop now</Button>
              </div>
            </div>
            <img
              src={`https://cdn.shopify.com/s/files/1/0328/0961/5495/files/slide2_34f5461c-e545-4931-9ec5-9f84f3d1af1e_1950x.jpg?v=1610513817`}
              className={classes.heroBg}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
export default Hero;
