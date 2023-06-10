import React from 'react'
import Head from "../../components/head/Head";
import Hero from "../../components/hero/Hero";
import Body from "../../body/Body";
import Check from "../../check/Check";
import Footer from "../../footer/Footer";
import Headbody from '../headbody/Headbody';
import Cards from '../cards/Cards';

function Home() {
  return (
    <div className="App" style={{ backgroundImage: "url(background1.png)" }}>
      < Head />
      
      < Headbody />
      < Cards />
    < Hero />
    < Body />
    < Check />
    < Footer />
  </div>
  )
}

export default Home
