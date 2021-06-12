import React from "react";
import styles from "./HeroSection.module.scss";
import Typewriter from "typewriter-effect";
import resume from "../../Images/yasin_khan.pdf";

function HeroSection() {
  return (
    <div className={styles.heroWrapper} id="hero">
      <div className={styles.title}>
        <span>
          Yasin <br /> Khan
        </span>
      </div>
      <div className={styles.devInfo}>
        <Typewriter
          options={{
            strings: [
              "Full-Stack Developer",
              "React Native Developer",
              "WordPress Developer",
            ],
            autoStart: true,
            loop: true,
            color: "white",
            skipAddStyles: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .callFunction(() => {
                console.log("String typed out!");
              })
              .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
        <p>
          I am a self-taught javascript developer targeting clean code, best
          practices, and good communications skills to work in a team-oriented
          environment effectively
          <br />
          <br />
          You may reach me by email, linkedin, whatsapp or follow me on github
          :)
        </p>
        <div>
          <a href={resume} target="_blank" className={styles.resume}>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
