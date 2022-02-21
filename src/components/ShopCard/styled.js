import styled  from "styled-components";



export const ShopStyled = styled.div`
width: 100%;
height: calc(100vw/6);
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
padding:  0;
margin:  0 0  calc(100vw/17) 0;
background-color: var(--cl-shop);
position: relative;

@media (max-width: 767px) {
    width: 100%;
    height: calc(147vw/6);
}
@media (max-width: 576px) {
    width: 100%;
    height: calc(147vw/4);
}


&::after{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -40%;
    width: 102%;
    background: #D10024;
    opacity: 0.9;
    -webkit-transform: skewX(-45deg);
    -ms-transform: skewX(-45deg);
    transform: skewX(-45deg);
}
/* 
&::before{
    left: -3.89%;
    width: 100%;
    transform: skewX(-45deg) translateX(-100%);
} */
&:hover{
    & img{
        transform: scale(1.05);
    }
}
`

export const ShopTitle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 75%;
    padding: calc( 10px + 100vw/60);
    z-index: 10;

    @media (max-width: 992px) {
        padding: 10px calc( 10px + 100vw/60);
    }
    @media (max-width: 767px) {
        padding: calc( 10px + 100vw/40);
    }
        
    @media (max-width: 576px) {
        padding: calc( 20px + 100vw/40);
    }

    & > h1{
        width: 70%;
        font-size: var(--size24);
        font-family: var(--font-familyS);
        color: var(--cl-white);
        margin: 0;
    }
    & > a{
        font-size: var(--size14);
        font-family: var(--font-familyS);
        color: var(--cl-white);
        margin: 10px 0 0 0;
        display: flex;
        text-decoration: none;
        text-transform: uppercase;
    }

`
export const CardImg = styled.img`
width: 100%;
transition: all 0.18s linear;


`