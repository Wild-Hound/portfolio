import React from "react";
import styles from "./CVSection.module.scss";

function CVSection() {
  return (
    <div className={styles.parentWrapper} id="about">
      <h1 className="secHeader">About Me</h1>
      <div className={styles.cvSection}>
        <div className={styles.CV}>
          <div className={styles.cvHeader}>
            <div className={styles.headImg}></div>
            <div className={styles.headContent}>
              <h1>Yasin Khan</h1>
              <p>
                I have project based experience on <br />
                React, React Native and WordPress
              </p>
            </div>
            <div className={styles.headBtnCon}>
              <a href="https://www.linkedin.com/in/yk404/" target="_blank">
                Linkedin
              </a>
              <a href="https://github.com/Wild-Hound" target="_blank">
                Github
              </a>
            </div>
          </div>
          <div className={styles.cvBody}>
            <div className={styles.cvBodySec}>
              <h2>Overview</h2>
              <div>
                <p>
                  My name is Yasin and I am a self-taught software developer
                  currently looking for an opportunity to grow as a web
                  developer.
                  <br />
                  <br />I am proficient in MERN stack development with REST &
                  GraphQL as API endpoint.
                  <br />
                  <br />I am comfortable working with both SQL and noSQL for
                  database, I am familier with firebase cloud functions and
                  netlify cloud functions
                  <br />
                  <br />I am also adequate knowladge of Python, PHP & Java
                </p>
              </div>
            </div>
            <div className={styles.cvBodySec}>
              <h2>My Knowledge Base</h2>
              <div className={styles.skillWrapper}>
                <h3>Expertise</h3>
                <div>
                  <div className={styles.iconWrapper}>
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/react.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/nativescript.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/nodedotjs.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/firebase.svg"
                      className={styles.svgColor}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.skillWrapper}>
                <h3>Frameworks</h3>
                <div>
                  <div className={styles.iconWrapper}>
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/redux.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/nextdotjs.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/express.svg"
                      className={styles.svgColor}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.skillWrapper}>
                <h3>Others</h3>
                <div>
                  <div className={styles.iconWrapper}>
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/wordpress.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/php.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/python.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/opencv.svg"
                      className={styles.svgColor}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.skillWrapper}>
                <h3>Technologies</h3>
                <div>
                  <div className={styles.iconWrapper}>
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/typescript.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/sass.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/styledcomponents.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/tailwindcss.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/materialui.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/bootstrap.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/antdesign.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/mongodb.svg"
                      className={styles.svgColor}
                    />
                    <img
                      height="32"
                      width="32"
                      src="https://unpkg.com/simple-icons@v5/icons/postgresql.svg"
                      className={styles.svgColor}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.skillWrapper}>
                <h3>More</h3>
                <div>
                  <div className={styles.iconWrapper}>
                    I also love to develop desktop apps with electron.js,
                    develop wordpress themes & plugins and make chrome extension
                    to make my browsing experience better
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cvBodySec}>
              <h2>Biography</h2>
              <div className={styles.bioDiv}>
                <div>
                  <p>Name: Yasin Khan Shejan</p>
                  <p>Age: 21</p>
                </div>
                <div>
                  <p>Education: CSE(Professional Honours)</p>
                  <p>Experence: Freelance WordPress Developer</p>
                  <p>Email: yasinkhan4008@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVSection;
