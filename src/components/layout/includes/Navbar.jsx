import React  from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        
            <nav className="navbar">
                <ul className="navbar__ul">
                    <li className="navbar__ul-li">
                        <Link to="/" className="nav__link">Home</Link>
                    </li>
                
                   
                    <li className="navbar__ul-li">
                        <Link to="/Login" className="nav__link"><i class='bx bx-user'></i>Login</Link>
                    </li>
                   
                    <li className="navbar__ul-li">
                        <Link to="/Register" className="nav__link">Register</Link>
                    </li>
                    <li className="navbar__ul-li">
                        <Link to="/Event" className="nav__link">Event</Link>
                    </li>
                    <li className="navbar__ul-li">
                        <Link to="/Admin" className="nav__link">Admin</Link>
                    </li>
                    <li className="navbar__ul-li">
                        <Link to="/Tchat" className="nav__link">tchat</Link>
                    </li>
                </ul>
            </nav>   
    )
}

export default Navbar


