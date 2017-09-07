import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="row">
                <Link to="/realuniverse/"><p className="text-icon" >realuniverse.com</p></Link>
                <ul className="main-nav">
                    <li><a href="#">Buy</a></li>
                    <li><a href="#">Rent</a></li>
                    <li><a href="#">New Planets</a></li>
                    <li><button className="signUp">Sign up</button></li>
                    <li><button className="logIn">Log in</button></li>
                </ul>
            </div>
    </div>
  );
}

export default Navbar;
