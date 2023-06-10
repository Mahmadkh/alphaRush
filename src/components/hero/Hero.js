import React from 'react'
import styles from "./Hero.module.css"

function Hero() {
  return (
    <div className={styles.mainContainer}>
          <div className={styles.textHead}>
          <div className={styles.text}>
          To Be Able To Participate To Launchpad, Make Sure It Is In The Nitro Launchpad Pool
          </div>
          <div className={styles.documentation}>
          Launchpad Documentation
          </div>
          </div>
          {/* <div className={styles.cards}>
              < Cards/>
          </div> */}
    </div>
  )
}

export default Hero
