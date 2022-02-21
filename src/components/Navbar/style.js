import styled  from "styled-components";
// import { NavLink   } from "react-router-dom";







export const Nav = styled.div`
    width:100%;
    height: auto;
    padding: 0 ;
    background: #FFF;
    border-bottom: 2px solid #E4E7ED;
    border-top: 3px solid #D10024;
    
    @media (max-width: 768px){
        background-color: var(--cl-dark);
    }

`

export const Ul = styled.ul`
    width: 100%;
    display:  flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
        display: ${({display})=> display?  display :"flex"};
        width: 100vw;
        height: 60vw;
        background-color: var(--cl-dark);
        flex-direction: column;
        
        
    }
`
Ul.Li = styled.li`
    width: auto;
    padding: 20px 0px;
    margin-left: ${({mr})=>mr? mr : "30px"};
    color: #2B2D42;
    background-color: transparent;

    >a{
        text-decoration: none;
        font-family: var(--font-family);
        font-size: var(--size18);
        -webkit-transition: 0.2s color;
        transition: 0.2s color;
        display: flex;
        position: relative;

        &::before{
            content: "";
            position: absolute;
            width: 0%;
            height: 2px;
            left: 0.1px;
            bottom: -4px;
            background-color: var(--cl-red);
            transition: all 0.2s linear;
            
        }
        &:hover{
            color: var(--cl-red);
            &::before{
            width: 99%;
            }
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

    @media (max-width: 768px){
        >.navlink{
        color: var(--cl-white);
        z-index: 10px;
    }   
    }

  
`
export const BuuttonUl = styled.button`
display: ${({display})=> display? display: "block"};
border:2px solid var(--cl-button);
outline: none;
cursor: pointer;
padding: 6px 14px;
border-radius: 4px;
background-color: var(--cl-button);
margin: 15px 0 15px auto;



&:active{
    transform: scale(0.95);
    background-color: var(--cl-white);
    &> svg{
    path{
        fill: var(--cl-button);
    }
    
}
}

@media (min-width: 768px) {
    display: none;
}
`
