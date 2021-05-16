import React, { useEffect } from "react";
import styles from "./MainNav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faBars } from "@fortawesome/free-solid-svg-icons";
import { menuBtnAct } from "./MainNavMech";

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
              <a href="#">Portfolio</a>
            </li>
            <li className={styles.link}>
              <a href="#">Blog</a>
            </li>
            <li className={styles.link}>
              <a href="#">Contact</a>
            </li>
          </ul>
          <a href="#" className={styles.Resume}>
            Download Resume <FontAwesomeIcon icon={faDownload} />
          </a>
          <button
            className={styles.menuBtn}
            onClick={(e) => menuBtnAct(e, styles.subMenu)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div id={styles.subMenu} style={{ display: "none" }}>
          <ul className={styles.subLinks}>
            <li className={styles.subLink}>
              <a href="#">Home</a>
            </li>
            <li className={styles.subLink}>
              <a href="#">Home</a>
            </li>
            <li className={styles.subLink}>
              <a href="#">Home</a>
            </li>
            <li className={styles.subLink}>
              <a href="#">Home</a>
            </li>
            <li className={styles.subLink}>
              <a href="#">Home</a>
            </li>
            <li className={styles.resume}>
              <a href="#">Download Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
