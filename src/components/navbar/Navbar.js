import React, { useState } from "react";
import { Link } from "react-router-dom";

//EASY CONSOLE
/* import { logger } from "../../utilities/logger"; */

//CONSTANTS
import { picked, navbarItems } from "../../constants/NavbarConstants";

//CSS:STYLED-COMPONENTS
import { NavContainer, LogoSpan, RightDiv, NavItem } from "./Navbar.styled";

function Navbar() {
  const [selected, setSelected] = useState("");

  return (
    <NavContainer>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <LogoSpan> HACA </LogoSpan>
      </Link>

      <RightDiv>
        {navbarItems.map((navbarItem, index) => (
          <Link
            key={index}
            to={navbarItem.routeName}
            style={{ textDecoration: "none" }}
          >
            <NavItem
              className={index}
              onClick={() => {
                setSelected(navbarItem.routeName);
              }}
              style={{
                color: selected === navbarItem.routeName ? picked.color : "",
                fontFamily:
                  selected === navbarItem.routeName ? picked.fontfamily : "",
              }}
            >
              {navbarItem.name}
            </NavItem>
          </Link>
        ))}
      </RightDiv>
    </NavContainer>
  );
}

export default Navbar;
