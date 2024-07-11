import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Objetivo from "../components/Contenido"
import Info from "../components/Info";
import Fotter from "../components/Fotter";
import { motion, useScroll } from "framer-motion";
import '../App.css'
// import Preloader from "./Preloader";
const page = () => {
  const {scrollYProgress} = useScroll()
 
  return (
    <>
   
  
      <div className="pantallas">
      <motion.div
          className="bg-red-500 h-3 w-full z-30 fixed top-0"
          style={{ scaleX: scrollYProgress }}
          />
        <Header classname="z-20 relative" />
        <Banner />
        <motion.div
        initial={{opacity:0, scale:0}}
        whileInView={{opacity:1, scale:1}}
        >
        <Objetivo/>
        </motion.div>
        <Info/>
        <Fotter/>
      </div>

    </>
  );
};

export default page;
