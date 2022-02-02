import React from "react";
import { NavLink , Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <div>
            <NavLink to='/home'>
                <div>
                    Home
                </div>
            </NavLink>
        </div>
    )
}

export default Navbar;