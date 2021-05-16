import React from "react";
import styles from "./HeroSection.module.scss";
import Typewriter from "typewriter-effect";
import LastSection from "../LastSection/LastSection";

function HeroSection() {
  const TypeWriterObj = new Typewriter("", {
    strings: ["Hello", "World"],
    autoStart: true,
  });
  return (
    <div className={styles.heroWrapper}>
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
          Hello! I am Web Developer from United States, New York. I have rich
          experience in web site design and building, also I am good at
          wordpress. I love to talk with you about our unique.
        </p>
        <div>
          <a href="#" className={styles.resume}>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
