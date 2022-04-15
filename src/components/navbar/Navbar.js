import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logger } from "../../utilities/logger";

import { NavContainer, LogoSpan, RightDiv, NavItem } from "./Navbar.styled";

function Navbar() {
  const navItems = [
    { name: "HOME", routeName: "home" },
    { name: "SOFTWARE", routeName: "software" },
    { name: "BACKGROUND", routeName: "background" },
    { name: "CONTACT", routeName: "contact" },
  ];

  const picked = {
    radius: "0.3rem",
    color: "#ffc81b",
    family: "Rubik Moonrocks",
  };

  const [selected, setSelected] = useState("");

  return (
    <NavContainer>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <LogoSpan> HACA </LogoSpan>
      </Link>

      <RightDiv>
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.routeName}
            style={{ textDecoration: "none" }}
          >
            <NavItem
              className={index}
              onClick={() => {
                setSelected(item.routeName);
              }}
              style={{ color: selected === item.routeName ? "pink" : "black" }}
            >
              {item.name}
            </NavItem>
          </Link>
        ))}
      </RightDiv>
    </NavContainer>
  );
}

export default Navbar;
