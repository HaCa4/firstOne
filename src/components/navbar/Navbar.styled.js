import styled from "styled-components";

/*  COLORS

yellow  ="#ffc81b"
dblue   ="#062e51"
nut     ="#531410"
red     ="#c10000"

*/

const flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const NavContainer = styled(flex)`
  height: 10vh;
  width: 100vw;
  flex-flow: row;
  justify-content: space-around;
  border-bottom: 5px solid #ffc81b;
  border-radius: 5px;
  position: fixed;
  top: 0;
  flex-wrap: wrap;
  background-color: white;
`;

export const LogoSpan = styled.span`
  height: 2rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: Rubik Moonrocks;
  padding: 0 2rem;
  color: #ffc81b;

  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
    color: #062e51;
  }
`;
export const RightDiv = styled(flex)`
  width: auto;
  height: 2rem;
  border-radius: 1rem;
  flex-flow: row;
  justify-self: flex-end;
  justify-content: space-evenly;
`;
export const NavItem = styled.span`
  /* color: #bc0000 ; */
  margin: 0 0.8rem;
  font-size: 1.1rem;
  color: ${(props) => (props.pick == null ? "#bc0000" : props.pick.color)};
  font-family: ${(props) =>
    props.pick == null
      ? "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
      : props.pick.family};
  border-radius: ${(props) => (props.pick == null ? null : props.pick.radius)};
  &:hover {
    cursor: pointer;
    border-radius: 0.3rem;
    /* width: auto; */
    color: #ffc81b;
    font-family: Rubik Moonrocks;
  }
`;
