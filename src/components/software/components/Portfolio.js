import React from "react";

//CONSTANTS
import { portfolioWebsites } from "../../../constants/SoftwareConstants";

//CSS: BOOTSTRAP5

const Portfolio = () => {
  //HELPER FUNCTION
  const RenderPortfolioWebsites = () => {
    return portfolioWebsites.map((website, index) => (
      <div className="col-sm-4 m-5">
        <div className="card text-center">
          <div className="card-body">
            <iframe
              src={website.url}
              name={website.name}
              title={website.name}
            />
            <h5 className="card-title">{website.name}</h5>
            <p className="card-text">{website.details}</p>
            <a href={website.url} className="btn bt-md btn-primary">
              {website.buttonText}
            </a>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: "5rem" }}> PREVIOUS PROJECTS</h2>
      <div className="d-flex justify-content-around flex-wrap">
        {RenderPortfolioWebsites()}
      </div>
    </div>
  );
};

export default Portfolio;
