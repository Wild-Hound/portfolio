import React from "react";
import styles from "./BlogCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function BlogCard() {
  return (
    <div className={styles.blogCard}>
      <div className={styles.imgCover}></div>
      <div className={styles.content}>
        <h3>Javascript Fundamentals</h3>
        <p>
          mainstream programming language it adapted itself to be like OPP &
          Functional language. Since javascript does not force a specific
        </p>
        <a href="#">
          View Blog <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
