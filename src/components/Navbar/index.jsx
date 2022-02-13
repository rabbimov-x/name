import React from "react";
import { navbar } from "../../utils/navbar";
import { Nav, Ul } from "./style";
import {NavLink} from 'react-router-dom'
const Navbar = ()=>{
    return(
        <Nav>
            
            

            <Ul>
       

                {
                    navbar.map(({id , path , title})=>{
                        return(
                            <Ul.Li key = {id}>
                                <NavLink    to = {path}  className = {({isActive})=>isActive? "activeNav" : "navlink"}  >
                                    {title}
                                    
                                </NavLink>
                            </Ul.Li>
                        )
                    })
                }
                
            </Ul>
        </Nav>
    )
}

export default Navbar;