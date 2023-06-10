import React from 'react'
import styles from "./Headbody.module.css"
import { Link } from "react-router-dom";
import Launchpad from "../launchpad/Launchpad";
import Stake from "../../stakeandlaunch/Stake";




function Headbody() {
  return (
    <div className={styles.mainContainer}>
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
  )
}

export default Headbody
