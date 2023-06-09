import React from "react";
import styles from "./Body.module.css";

function Body() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.projects}>Participated Projects</div>
      <div className={styles.rectangleCard}>
        <div className={styles.bodyimg}>
          <img src="bodyimg.png" alt="" />
        </div>
        <div className={styles.separation}></div>
        <div className={styles.rightHalf}>
                  <div className={styles.gradient}>
                      <div className={styles.projectA}>
                      <div className={styles.pojectA}>$Project_A</div>
                  </div>
          <div className={styles.textBody}>
            <div className={styles.leftHandText}>
              <div className={styles.list}>Whitelist access priority:</div>
              <div className={styles.list}>Max buy amount:</div>
              <div >Whitelisted address:</div>
            </div>
            <div className={styles.rightHandText}>
              <div>Low (what is this?)</div>
              <div className={styles.flex}>
              <p> 1% </p> of supply

              </div>
              <div className={styles.textWidth}>
                0xf0047acFfEccFbfE4CB3126Dc074EAaE2ba64AB8
              </div>
            </div>
          </div>
         </div>
              </div>
              
          </div>
          <div className={styles.ether}>
          <img src="ethereum.png" alt="" />
          </div>
    </div>
  );
}

export default Body;
