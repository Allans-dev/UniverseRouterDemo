import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeMenu extends Component {
    
    
    
    render(){
        return (
            <div className="homeMenu">
                <Link to="/neighbors">
                    <img alt="earth-and-moon-icon" src="imgs/earth-and-moon.png"></img> 
                    Neighborhood<br/>
                    (less than 50 parsecs)
                </Link>
                <Link to="/region">
                    <img alt="solar-system-icon" src="imgs/solar-system.png"></img> 
                    Regional<br/>
                    (less than 200 parsecs)
                </Link>
                <Link to="/all">
                    <img alt="galaxy-icon" src="imgs/galaxy-view.png"></img> 
                    All
                </Link>
            </div>
        );
    }
}

export default HomeMenu;
