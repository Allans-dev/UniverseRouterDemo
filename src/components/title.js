import React from 'react';
import Navbar from './navbar.js';
import SearchBar from '../containers/searchBar.js';

const Title = () => {
  return (
    <div className="title">
      <div className="row">  
        <Navbar />
        <div className="tagline">
          Find your place among the stars
        </div>
        <SearchBar />
      </div>
    </div>
  );
}

export default Title;
