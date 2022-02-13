import styled  from "styled-components";
// import { NavLink   } from "react-router-dom";







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
    align-items: center;
    list-style: none;
    margin: 0;
`
Ul.Li = styled.li`
    padding: 20px 0px;
    margin-left: 30px;
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

  
`




