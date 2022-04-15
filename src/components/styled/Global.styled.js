import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa:wght@400;700&family=Dancing+Script:wght@400;700&family=Rubik+Moonrocks&family=Rubik+Wet+Paint&display=swap');
/*
font-family: 'Bebas Neue', cursive;
font-family: 'Comfortaa', cursive;
font-family: 'Dancing Script', cursive;
font-family: 'Rubik Moonrocks', cursive;
*/
body{
    margin: 0px;
    padding: 0px;
    
    line-height: 1.25rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
    
    color:#ffc81b;

    justify-content: center;
    align-items: center;
    text-align: center;
}
`