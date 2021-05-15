import React from "react";
import styles from "./MainNav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function MainNav() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <span>Yasin</span>
          <span>Khan</span>
        </div>
        <div className={styles.mainContent}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a href="#">Home</a>
            </li>
            <li className={styles.link}>
              <a href="#">About</a>
            </li>
            <li className={styles.link}>
              <a href="#">Resume</a>
            </li>
            <li className={styles.link}>
              <a href="#">Portfolio</a>
            </li>
            <li className={styles.link}>
              <a href="#">Contact</a>
            </li>
            <li className={styles.link}>
              <a href="#">Blog</a>
            </li>
          </ul>
          <a href="#" className={styles.Resume}>
            Download Resume <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
