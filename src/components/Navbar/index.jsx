import React   from "react";
import { navbar } from "../../utils/navbar";
import { BuuttonUl, Nav, Ul } from "./style";
import {NavLink} from 'react-router-dom'
import { Container, Icon } from "../../GlobalStyle";
import { useDispatch , useSelector } from "react-redux";
import { updateState } from "../../redux/type/types";
const Navbar = ()=>{
const state = useSelector((state)=>state.home.buttonClick)
const dispatch = useDispatch()
    return(
        <Nav>
            
            <Container>
                   <BuuttonUl   onClick={()=>dispatch({type: updateState ,  buttonClick : !state })}  >
                    
                    {
                        state ? <Icon.Navigation w = "var(--icon-w18)"/> : <Icon.X w = "var(--icon-w18)" />
                    }
                    
                </BuuttonUl>
                <Ul  display = {state ?  "none" : "flex"}  >
        

                    {
                        navbar.map(({id , path , title} , keys)=>{
                            return(
                                <Ul.Li  key = {id} mr = {keys === 0 ? "20px" : "30px"} >
                                    <NavLink  onClick={()=>dispatch({type: updateState ,  buttonClick : !state })}   to = {path}  className = {({isActive})=>isActive? "activeNav" : "navlink"}  >
                                        {title}
                                        
                                    </NavLink>
                                </Ul.Li>
                            )
                        })
                    }
                    
                </Ul>
            </Container>
        </Nav>
    )
}

export default Navbar;