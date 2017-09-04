import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeMenu extends Component {
    
    
    
    render(){
        return (
            <div className="homeMenu">
                <Link to="/neighbors">
                    <div>
                        <img alt="earth-and-moon-icon" src="imgs/earth-and-moon.png"></img> 
                        Neighborhood<br/>
                        (less than 50 parsecs)
                    </div>
                </Link>
                <Link to="/region">
                    <div>
                        <img alt="solar-system-icon" src="imgs/solar-system.png"></img> 
                        Regional<br/>
                        (less than 200 parsecs)
                    </div>
                </Link>
                <Link to="/all">
                    <div>
                        <img alt="galaxy-icon" src="imgs/galaxy-view.png"></img> 
                        All
                    </div>
                </Link>
            </div>
        );
    }
}

export default HomeMenu;
