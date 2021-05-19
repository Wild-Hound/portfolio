import React from "react";
import styles from "./PortfolioSection.module.scss";

import PortfolioItem from "./PortfolioItem/PortfolioItem";

function PortfolioSection() {
  return (
    <div className={styles.portfolioWrapper}>
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </div>
  );
}

export default PortfolioSection;
