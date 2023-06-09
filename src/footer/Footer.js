import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.column}>
        <div className={styles.span}><span>AlphaRush AI</span> LLC.</div>
        <div >
          ALPHARUSH AI LLC Services are not available for use by U.S. residents
          or those located in a country subject to a U.S. Government embargo.
        </div>
      </div>
      <div className={styles.columnTwo}>
        <div ><span >Medium</span> </div>
        <div>Documentation </div>
        <div>For Projects </div>
      </div>
      <div className={styles.columnTwo}>
        <div>Legal </div>
        <div>Get $RUSHAI </div>
          </div>
          <div className={styles.icon}>
              <img src="Telegram.png" alt="" />
              <img src="Twitter-3.png" alt="" />
              <img src="Discord.png" alt="" />

          </div>
    </div>
  );
}

export default Footer;
