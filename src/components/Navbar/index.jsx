import React from "react";
import { navbar } from "../../utils/navbar";
import { Nav, Ul } from "./style";
import {NavLink} from 'react-router-dom'
import { Container } from "../../GlobalStyle";
const Navbar = ()=>{
    return(
        <Nav>
            
            <Container>
                <Ul>
        

                    {
                        navbar.map(({id , path , title} , keys)=>{
                            return(
                                <Ul.Li key = {id} mr = {keys === 0 ? "20px" : "30px"} >
                                    <NavLink    to = {path}  className = {({isActive})=>isActive? "activeNav" : "navlink"}  >
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