import React from "react";
import styles from "./Cards.module.css";

function Cards() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cards}>
              <div className={styles.cardContent}>
          <img src="card1.png" alt="" />
          <div className={styles.contentContainer}>
            <div className={styles.cardHeading}>$RUSHAI Staking Pool</div>
            <div className={styles.apy}>12345689% APY</div>
            <div className={styles.apy}>TVL - 12345678$ </div>
          </div>
          <div className={styles.stake}>Stake </div>
        </div>
        <div className={styles.cardContentSecond}>
                  <div className={styles.front}>
                  <div className={styles.lowestContainer}>

                  <img src="card2.png" alt="" />
          <div className={styles.contentContainer}>
            <div className={styles.cardHeadingTwo}>
              $RUSHAI Launchpad Nitro Pool #1
            </div>
            <div className={styles.spySecond}>12345689% APY</div>
            <div className={styles.spySecond}>
              TVL - <div className={styles.color}>12345678$</div>{" "}
            </div>
          </div>
          <div className={styles.stake}>Unstake </div>
                      </div>
                      </div>
        </div>
        <div className={styles.cardContent}>
          <img src="card1.png" alt="" />
          <div className={styles.contentContainer}>
            <div className={styles.cardHeading}>$RUSHAI Staking Pool</div>
            <div className={styles.apy}>12345689% APY</div>
            <div className={styles.apy}>TVL - 12345678$ </div>
          </div>
          <div className={styles.stake}>Stake </div>
        </div>
        </div>
      </div>
    
  );
}

export default Cards;
