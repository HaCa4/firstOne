import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//COMPONENTS
import Navbar from "../navbar/Navbar";
import HomePage from "../homePage/HomePage";
import Background from "../background/Background";
import Software from "../software/Software";
import Contact from "../contact/Contact";

//CSS: STYLED-COMPONENTS
import { GlobalStyle } from "../globalStyle/Global.styled";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/software" exact element={<Software />} />
        <Route path="/background" exact element={<Background />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
