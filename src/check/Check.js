import React from 'react'
import styles from "./Check.module.css"

function Check() {
  return (
      <div className={styles.mainContainer}>
          {/* <img className={styles.img} src='checkout.png' alt=''/> */}
          <div className={styles.checkItOut}>
        <div className={styles.contain}>
        <img src='checkitout.png' alt='' />
              <div className={styles.txt}>
              Our AI technology AlphaSquawk and
chat-with-JennaAI is <span> already available</span> to holders
          </div>
              <button className={styles.checkButton}>
              Check it Out
              </button>
            </div>
          </div>
      
    </div>
  )
}

export default Check
