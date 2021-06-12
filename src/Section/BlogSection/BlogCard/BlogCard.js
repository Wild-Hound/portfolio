import React from "react";
import styles from "./BlogCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function BlogCard({ blogLink, bgImg, title, parah }) {
  return (
    <div className={styles.blogCard}>
      <div className={styles.imgCover}>
        <img src={bgImg} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{parah}</p>
        <a href={blogLink} target="_blank">
          View Blog <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
