import styled from "styled-components";

export const Container=styled.div`

width: 70vw;
display: flex;
flex-direction:column;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`

export const CommentsDiv=styled.div`
margin-top: 4rem;
height: 50vh;
width:40vw;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

overflow:auto ;
background-color:#d9d2d2;
border-radius: 10px;
h3{
    
}
`


export const Form=styled.form`

border-radius: 16px;
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height:65vh;
width: 45vw;

color:#531410;
box-shadow: 0 0 10px 5px rgba(29,155,240);
`
export const Label=styled.label`
font-size: smaller;
`
export const Input=styled.input`
width: 80%;
border-radius: 4px;
background-color: rgb(255,255,200);
color:black;
&:focus{
    outline: none;
    transform:scale(1.01);
}
`

export const MsgInput=styled.input`
width: 80%;
height: 40%;
border-radius: 4px;
background-color: rgb(255,255,200);
color:black;
text-align: start;
&:focus{
    outline: none;
    transform:scale(1.01);
}
`

export const Button=styled.button`

height:1.5rem;
width: auto;
border-radius: 4px;


background-color: #531410 ;
color:#d9d2d2 ;
border:none;
box-shadow: 0 0 2px 2px gray;


margin-bottom: 3px;
outline:none;
border-color:#d9d2d2 ;

&:hover{
    cursor: pointer;
}
&:active{
    transform: scale(0.97);
    transition: 1.5s ease-out;
}

`
export const Select=styled.select`
width:80%;
height:1.5rem;
border-radius: 3px;
background-color: rgb(255,255,200);
color: black;
`
export const Option=styled.option`
border-radius: 5px;
`

export const UserCard=styled.div`
margin: 0 0.5rem 1rem 0.5rem;
padding:0.5rem;
border-radius: 1rem;
text-align: left;
height: 40vh;
width: 20vw;
color:black;
background-color: aliceblue;
font-size: 10px;
`