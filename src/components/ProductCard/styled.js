import styled from "styled-components";



export const ProductSyled = styled.div`
width: 100%;
height: auto;
box-shadow: 0px 0px 0px 0px #e4e7ed, 0px 0px 0px 1px #e4e7ed;
border: 1px solid var(--cl-line) ;
`
export const Product = styled.div`

`

Product.Img = styled.div`

width: 100%;
height: calc(100vw/7);
background-color: var(--cl-white);
box-sizing: border-box;
&> img{
    width: 100%;
    height: 100%;
}
`
Product.Body = styled.div`
width: 100%;
height: auto;
padding: 15px;
display:  flex;
flex-direction: column;
align-items: center;
text-transform: uppercase;
`
Product.P = styled.p`
font-size: var(--size12);
font-family: var(--font-family);
color: var(--cl-grey-p);
`
Product.A = styled.a`
font-size: var(--size14);
font-family: var(--font-familyS);
font-weight: 700;
color: var(--cl-navlink);
&:hover{
    color: var(--cl-red);
}
`
Product.H4 = styled.h1`
font-size: var(--size18);
font-family: var(--font-familys);
color: var(--cl-red);

&> del{
    font-size: 80%;
    font-family: var(--font-family);
    color: var(--cl-grey-p);
    margin-left: 5px;
}
`

Product.Star = styled.div`
width: 36%;
height: 2px;
background-color: var(--cl-line);
`
Product.Btn = styled.div` 
    position: relative;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: transparent;
    border: none;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;

    &:hover{
        background-color: var(--cl-shop);
    }

`
