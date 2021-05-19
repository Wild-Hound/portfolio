import React from "react";
import styles from "./PortfolioItem.module.scss";
import img from "../../../Images/ss1.png";
import img2 from "../../../Images/ss2.png";
import img3 from "../../../Images/ss3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Navigation]);

function PortfolioItem() {
  return (
    <div className={styles.portfolioWrapper}>
      <Swiper navigation={true} className={styles.swiperWrapper}>
        <SwiperSlide className={styles.swiperItem}>
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src={img3} />
        </SwiperSlide>
      </Swiper>
      <div className={styles.buttonWrapper}>
        <button id={styles.live}>Live</button>
        <button id={styles.github}>Github</button>
      </div>
    </div>
  );
}

export default PortfolioItem;
