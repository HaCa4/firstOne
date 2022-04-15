import styled from "styled-components";

/*  COLORS

yellow  ="#ffc81b"
dblue   ="#062e51"
nut     ="#531410"
red     ="#c10000"

*/

export const SliderDiv=styled.div`
position: relative;
height: 100vh;
width: 100vw;
display:flex;
justify-content: center;
align-items: center;

.right-arrow{
    position:absolute;
    top: 50%;
    right:5vw;
    font-size: 3rem;
    color:#c10000;
    cursor: pointer;
    user-select: none;
    transform: scale(0.92);
    &:hover{
        transform: scale(1);
        color:#ffc81b;
    };
};
.left-arrow{
    position:absolute;
    top: 50%;
    left:5vw;
    font-size: 3rem;
    color:#c10000;
    cursor: pointer;
    user-select: none;
    transform: scale(0.92);
    &:hover{
        color:#ffc81b;
        transform: scale(1);

    };
};

.slide{
    opacity: 0;
}
.slideActive{
    padding-top: 3rem;
    opacity: 1;
    transition-duration:1.4s;
    transform: scale(0.9);
}

`

export const Img=styled.img`
border-radius: 10px;
max-width: 75%;
max-height:75%;

&:hover{
    border:2px solid #ffc81b;
    cursor:pointer;

}
`
