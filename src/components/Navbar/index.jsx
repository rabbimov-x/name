import React from "react";
import { navbar } from "../../utils/navbar";
import { Nav, Ul } from "./style";
import { NavLink } from "react-router-dom";
const Navbar = ()=>{
    return(
        <Nav>
            

            <Ul>
            <NavLink to="/home" activeClassName="selected">
  FAQs
</NavLink>

                {
                    navbar.map(({id , path , title})=>{
                        return(
                            <Ul.Li key = {id}>
                                <NavLink  to = {path}  >
                                    <h3 style={ {color: 'inherit'}}>{title}</h3>
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