import React from "react";

//COMPONENTS
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

const Software = () => {
  return (
    <div className="d-flex flex-column">
      <Skills />
      <Portfolio />
    </div>
  );
};
export default Software;
