import styled from "styled-components";



/* const dBlue="#062e51"
const nut="#531410"
const ylw="#ffc81b" 
const gry=#d9d2d2*/

const center=styled.div`

display: flex;

justify-content: space-around;
align-items: center;
text-align: center;

`

export const ContactDiv=styled(center)`

margin-top:10vh;
flex-direction: column;
width: auto;
color:#531410;
`


export const LowerDiv=styled(center)`

flex-direction:column;
justify-content:space-around;

padding-top:3rem;
margin-bottom:4rem;


width: 80vw;

border-radius:1rem;
`

export const MapPart=styled(center)`

width:40vw;
border-radius: 1rem;
background-color: #d9d2d2 ;
flex-direction:column;
justify-content:center;
margin-top:5rem
`

export const MsgPart=styled(MapPart)`
font-weight:bolder;
width:auto;
background-color:white;
margin:0
`



export const LowerLink=styled(center)`

display:flex;
flex-direction:row;
justify-content:space-around;
margin-top: 6rem;
width: 10vw;
border-radius: 4px;
font-size:2rem;
`

