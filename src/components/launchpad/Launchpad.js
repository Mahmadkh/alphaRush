import React from 'react'
import {  Link } from "react-router-dom";
import styles from "./Launchpad.module.css"

function Launchpad() {
  return (
    
   
    
          

    <div className={styles.App}>
          <img className="img" src="background.png" alt="" />

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
        
        <div className={styles.upComming}>
        <span >Live & Upcoming</span>
        <div className={styles.documentation}>
          Launchpad Documentation
          </div>
        </div>
{/* cards */}
        <div className={styles.cards}>
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
              TVL - <div className={styles.color}>12345678$</div>
            </div>
          </div>
          <div className={styles.stake}>Unstake </div>
                      </div>
                      </div>
        </div>
        </div>

        <div>


          
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
</div>
        
      </div>
      

        </div>
  
  )
}

export default Launchpad
