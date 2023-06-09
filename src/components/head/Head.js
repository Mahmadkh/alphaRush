import React from "react";
import styles from "./Head.module.css";
import Launchpad from "../launchpad/Launchpad";
import Stake from "../../stakeandlaunch/Stake";
import { Link } from "react-router-dom";

function Head() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headContainer}>
        <div className={styles.head}>alpharush</div>

        <div>
          <button>Connect Wallet</button>
        </div>
      </div>

      <div className={styles.tab}>
        <div className={styles.launch}>
          <Link to="/Launchpad" className={styles.linkTo}>
            Launchpad
          </Link>
        </div>
              <div className={styles.stakeAndLaunch}>
            <Link to="/Stake"  className={styles.linkTo}> Stake & Launch</Link>     </div>
              <div
                  className={styles.Alpha}>
                  < Link to="/Alpha" className={styles.linkTo}     > 
                  Alpha Terminal </Link> 
              </div>
      </div>
    </div>
  );
}

export default Head;
