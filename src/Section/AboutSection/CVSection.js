import React from "react";
import styles from "./CVSection.module.scss";

function CVSection() {
  return (
    <>
      <div className={styles.cvSection}>
        <div className={styles.CV}>
          <div className={styles.cvHeader}>
            <div className={styles.headImg}></div>
            <div className={styles.headContent}>
              <h1>Yasin Khan</h1>
              <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum
              </p>
            </div>
            <div className={styles.headBtnCon}>
              <button>Download CV</button>
              <button>Github</button>
            </div>
          </div>
          <div className={styles.cvBody}>
            <div className={styles.cvBodySec}>
              <h2>Biography</h2>
              <div>
                <p>
                  I'm Demetrius Bernard author bestseller books, won the Hugo
                  Award for Best Novel. Writing science fiction, including the
                  New York Times bestseller. I also writes non-fiction, on
                  subjects ranging from personal finance to astronomy to film.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CVSection;
