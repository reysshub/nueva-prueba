import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../paginas/Home";
import Services from "../paginas/Services";
import About from "../paginas/About";
import Contact from "../paginas/Contact";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default Rutas;
