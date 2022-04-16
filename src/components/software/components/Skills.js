import React from "react";

const Skills = () => {
  return (
    <div
      className="d-flex flex-column justify-center align-center"
      style={{ marginTop: "7rem", marginBottom: "5rem" }}
    >
      <h2 style={{ marginBottom: "5rem", color: "#bc0000" }}>SKILLS</h2>
      <ul class="list-group text-center">
        <li class="list-group-item">HTML5</li>
        <li class="list-group-item list-group-item-primary">Java Script</li>
        <li class="list-group-item list-group-item-secondary">
          CSS3 / BOOTSTRAP5
        </li>
        <li class="list-group-item list-group-item-success">
          STYLED-COMPONENTS / SASS
        </li>
        <li class="list-group-item list-group-item-danger">
          REACT JS / REACT-ROUTER / REACT-REDUX
        </li>
        <li class="list-group-item list-group-item-warning">
          AXIOS / REST APIs
        </li>
        <li class="list-group-item list-group-item-info">GIT / GITHUB</li>
      </ul>
    </div>
  );
};

export default Skills;
