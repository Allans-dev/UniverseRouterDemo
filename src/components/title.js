import React from 'react';
import SearchBar from '../containers/searchBar.js';
import HomeMenu from './homeMenu.js';

const Title = () => {
    return (
        <div className="title">
            <div className="row">  
                <div className="tagline">
                    Find your place among the stars
                </div>
                <SearchBar />
                <HomeMenu />
            </div>
        </div>
    );
}

export default Title;
