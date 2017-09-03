import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <p className="text-icon" >realuniverse.com</p>    
            <ul className="main-nav">
                <li><a href="#">Buy</a></li>
                <li><a href="#">Sell</a></li>
                <li><a href="#">New Planets</a></li>
                <li><button className="signUp">Sign up</button></li>
                <li><button className="logIn">Log in</button></li>
            </ul>
    </div>
  );
}

export default Navbar;
