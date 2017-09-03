import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="text-icon" >realuniverse</p>    
        <ul className="main-nav">
          <li><a className="buyTab" href="#">Buy</a></li>
          <li><a className="sellTab" href="#">Sell</a></li>
          <li><a className="newPlanetsTab" href="#">New Planets</a></li>
          <li><a className="soldTab" href="#">Sold</a></li>
          <li><button>Sign up</button></li>
        </ul>
    </div>
  );
}

export default Navbar;
