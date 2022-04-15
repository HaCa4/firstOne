import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//COMPONENTS
import Navbar from "../navbar/Navbar";
import MainPage from "../main/MainPage";
import Background from "../background/Background";
import Software from "../software/Software";
import Contact from "../contact/Contact";

//CSS: STYLED-COMPONENTS
import { GlobalStyle } from "../styled/Global.styled";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Navbar />
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/software" exact element={<Software />} />
        <Route path="/background" exact element={<Background />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
