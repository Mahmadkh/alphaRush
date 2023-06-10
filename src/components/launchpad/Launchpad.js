import React from "react";
import { Link } from "react-router-dom";
import styles from "./Launchpad.module.css";
import CardSec from "../../secondcard/CardSec";
import Projects from "../../pastprojects/Projects";
import Headbody from '../headbody/Headbody';
import Head from "../head/Head";
import Footer from "../../footer/Footer";

function Launchpad() {
  return (
    <div
      className={styles.App}
      style={{ backgroundImage: "url(background1.png)" }}
    >
      < Head />
      < Headbody />
        

        <div className={styles.upComming}>
          <span>Live & Upcoming</span>
          <div className={styles.documentation}>Launchpad Documentation</div>
        </div>


        {/* cards */}
        < CardSec />
        < Projects />
        <div>
          {/* past projects */}
             
      </div>
      < Footer />
      </div>
    
  );
}

export default Launchpad;
