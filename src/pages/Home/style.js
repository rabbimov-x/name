import styled from "styled-components";

export const HomeStyle = styled.div`
width: 100%;
height: auto;
overflow: hidden;
`

export const Advert = styled.div`

width: 100%;
margin: 30px 0;
padding: 10px;
background-color: #E4E7ED;
background-image: url(https://preview.colorlib.com/theme/electro/img/xhotdeal.png.pagespeed.ic.523j9s2i8G.webp);
background-repeat: no-repeat;
background-position: center;
background-size: 100%;

@media (max-width: 1200px) {
    background-size: 120%;
}

`
Advert.Round = styled.div`
width: 100px;
height: 100px;
background-color: var(--cl-red);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 0 5px;

@media (max-width: 1200px) {
    width: 80px;
    height: 80px
}
@media (max-width: 576px) {
    width: 70px;
    height: 70px
}
`

Advert.Button = styled.button`
border: 2px solid var(--cl-red);
padding: 13px 25px;
background-color: var(--cl-red);
font-size: var(--size14);
color: var(--cl-white);
font-weight: 600;
border-radius: 40px;
cursor: pointer;
margin-top: 30px;

&:active{
    background-color: white;
    color: var(--cl-red);
}
`