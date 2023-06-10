import React from "react";
import styles from "./Head.module.css";

function Head() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headContainer}>
        <div className={styles.head}>alpharush</div>

        <div>
          <button>Connect Wallet</button>
        </div>
      </div>

     
    </div>
  );
}

export default Head;
