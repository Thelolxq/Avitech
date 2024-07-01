import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Objetivo from "../components/Contenido"
import Info from "../components/Info";
import '../App.css'
const page = () => {
  return (
    <>
      <div className="pantallas">
        <Header classname="z-20 relative" />
        <Banner />
        <Objetivo/>
        <Info/>
      </div>
    </>
  );
};

export default page;
