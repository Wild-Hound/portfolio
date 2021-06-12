import React, { useState } from "react";
import styles from "./PortfolioSection.module.scss";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import portData from "../../portfolioData.json";

function PortfolioSection() {
  const [category, setCategory] = useState("react");

  function changeCategory(name) {
    setCategory(name);
  }

  return (
    <div id="portfolio">
      <h1 className="secHeader">Portfolio</h1>
      <div className={styles.portfolioWrapper}>
        <div className={styles.tagWrapper}>
          <button onClick={(e) => changeCategory("react")}>React</button>
          <button onClick={(e) => changeCategory("react native")}>
            React Native
          </button>
          <button onClick={(e) => changeCategory("wordpress")}>
            WordPress
          </button>
        </div>
        <div className={styles.ItemWrapper}>
          {portData.map((data) => {
            console.log(data.categoty);
            if (category === data.categoty) {
              return <PortfolioItem data={data} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
