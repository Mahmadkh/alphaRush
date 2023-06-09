import React from 'react'
import Head from "../../components/head/Head";
import Hero from "../../components/hero/Hero";
import Body from "../../body/Body";
import Check from "../../check/Check";
import Footer from "../../footer/Footer";
import Launchpad from '../launchpad/Launchpad';

function Home() {
  return (
    <div className="App">
    <img className="img" src="background.png" alt="" />
    < Head />
    < Hero />
    < Body />
    < Check />
          < Footer />
          < Launchpad />
  </div>
  )
}

export default Home
