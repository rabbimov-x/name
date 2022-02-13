import styled  from "styled-components";



export const ShopStyled = styled.div`
width: 100%;
height: calc(100vw/6);
overflow: hidden;
padding:  0;
margin:  0 0  100px 0;
background-color: var(--cl-shop);
position: relative;


&::after , ::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0px;
    width: 61%;
    background: #D10024;
    opacity: 0.9;
    -webkit-transform: skewX(-45deg);
    -ms-transform: skewX(-45deg);
    transform: skewX(-45deg);
}

&::before{
    left: 1px;
    width: 100%;
    transform: skewX(-45deg) translateX(-100%);
}
`

export const ShopTitle = styled.div`
    position: absolute;
    top: 0;
    width: 75%;
    padding: 30px;
    z-index: 10;

    & > h1{
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
height: 100%;

`