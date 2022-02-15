import styled from "styled-components";



export const ProductSyled = styled.div`
width: 100%;
height: auto;
box-shadow: 0px 0px 0px 0px #e4e7ed, 0px 0px 0px 1px #e4e7ed;
border: 1px solid var(--cl-line);
background-color: var(--cl-white);
position: relative;
transition: all 0.3s linear;

&:hover{
    border: 2px solid var(--cl-red);
    border-bottom: none;


    &> .footer{
        bottom: -70px;
    }
}
`

export const Product = styled.div`

`
Product.Footer = styled.div`
position: absolute;
bottom: 0;
left: 0;
z-index: -1;
width: 100%;
height: auto;
padding: var(--mp15);
background-color: var(--cl-bg-addcard);
display: flex;
justify-content: center;
transition: all 0.3s linear;

&> .add-to-cart-btn{
    position: relative;
    display: flex;
    align-items: center;
    border: 2px solid var(--cl-red);
    outline: none;
    background-color: var(--cl-red);
    padding: var(--mp10) var(--mp30);
    color: var(--cl-white);
    font-size: var(--size18);
    font-family: var(--font-familyR);
    border-radius: 40px;
    transition: all 0.2s linear;


    &> .AddIcon{
        display: none;
        margin: none;
    }
    &:hover{ 
        color: var(--cl-red);
        background-color: var(--cl-white);
        padding-left: 20px;
        & > .AddIcon{
            display: block;
        }
    }
}

`

Product.Img = styled.div`

width: 100%;
height: calc(100vw/5);
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
z-index: 3;
background-color: var(--cl-white);
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
margin: ${({mr})=>mr ? mr: " 14px 0"};
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

margin: ${({mr})=>mr ? mr: " 14px 0"};

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
    background: transparent;
    margin: 0 5px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    border: 5px solid transparent;
    /* -webkit-transition: 0.2s all; */
    transition: all 0.3s linear;

    &:hover{
        &> .add{
            display: block;
        }
        background-color: var(--cl-shop);
        border: 1px solid var(--cl-shop);
    }

`
Product.Btnin = styled.div`
position: absolute;
width: calc(100px + 100vw/75 );
display: none;
padding: 10px 0px;
top: -60px;
cursor: pointer;



&> .addP{
    font-size: var(--size14);
    font-family: var(--font-familyR);
    font-weight: 500;
    background-color: var(--cl-bg-addcard);
    padding: 5px 10px;
    color: var(--cl-white);
}

`

