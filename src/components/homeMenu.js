import React from 'react';
import { Link } from 'react-router-dom';


const HomeMenu = () => {
    return (
        <div className="homeMenu">
            <div>
                <Link to="/browseNeighbours">
                    <img alt="earth-and-moon-icon" src="../../imgs/earth-and-moon.png"></img> 
                    Neighbourhood<br/>
                    (less than 50 parsecs)
                </Link>
            </div>
            <div>
                <Link to="/browseRegion">
                    <img alt="solar-system-icon" src="../../imgs/solar-system.png"></img> 
                    Regional<br/>
                    (less than 200 parsecs)
                </Link>
            </div>
            <div>
                <Link to="/browseAll">
                    <img alt="galaxy-icon" src="../../imgs/galaxy-view.png"></img> 
                    All
                </Link>
            </div>
        </div>
    );
}

export default HomeMenu;
