import styled from "styled-components";


export const FooterStyled = styled.div`
width: 100%;
height: auto;
padding: var(--mp30) 0;
background-color: var(--cl-dark);
`

export const Nav = styled.div`
    width:100%;
    height: auto;
    padding: 0 ;
    background: #FFF;
    border-bottom: 2px solid #E4E7ED;
    border-top: 3px solid #D10024;
    

`

export const Ul = styled.ul`
    display:  flex;
    flex-direction: column;
    align-items: left;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 767px) {
        padding-bottom: 30px;
    }
`

Ul.H = styled.h1`
font-size: var(--size20);
font-family: var(--font-familyR);
font-weight: 700;
margin: 0 0 20px 0 ;
color: var(--cl-white);
text-transform: uppercase;
`
Ul.Li = styled.li`
    padding: 10px 0px;
    margin: 0;
    background-color: transparent;
    >a{
        text-decoration: none;
        font-family: var(--font-family);
        font-size: var(--size14);
        -webkit-transition: 0.2s color;
        transition: 0.2s color;
        display: flex;
        position: relative;
        color: var(--cl-footer-p);

        
        &:hover{
            color: var(--cl-red);
           
        }
    }
    >.navlink{
        color: #2B2D42;
        
    }
    >.activeNav{
        color: var(--cl-red);
        display: flex;
        transition: all 0.2s linear;
        &::before{
            width: 99%;
        }
    }
  
`