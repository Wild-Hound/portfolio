import React from "react";
import styles from "./PortfolioItem.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import { gitAct, liveAct } from "./PortfolioItemMech";

SwiperCore.use([Navigation]);

function PortfolioItem(props) {
  const { git1, git2, img1, img2, img3, live } = props.data;

  return (
    <div className={styles.portfolioWrapper}>
      <Swiper navigation={true} className={styles.swiperWrapper}>
        <SwiperSlide className={styles.swiperItem}>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src={img3} />
        </SwiperSlide>
      </Swiper>
      <div className={styles.buttonWrapper}>
        <button
          id={styles.live}
          onClick={(e) => {
            liveAct(e, live);
          }}
        >
          Live
        </button>
        <button
          id={styles.github}
          onClick={(e) => {
            gitAct(e, git1, git2);
          }}
        >
          Github
        </button>
      </div>
    </div>
  );
}

export default PortfolioItem;
