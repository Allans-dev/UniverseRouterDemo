import React from 'react';
import { Link } from 'react-router-dom';


const HomeMenu = () => {
    return (
        <div className="homeMenu">
            <div>
                <Link to="/realuniverse/browseNeighbours">
                    <img alt="earth-and-moon-icon" src="./imgs/earth-and-moon.png"></img> 
                    <div className="menuText">
                        Neighbourhood<br/>
                        (less than 50 parsecs)
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/realuniverse/browseRegion">
                    <img alt="solar-system-icon" src="./imgs/solar-system.png"></img> 
                    <div className="menuText">
                        Regional<br/>
                        (less than 200 parsecs)
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/realuniverse/browseAll">
                    <img alt="galaxy-icon" src="./imgs/galaxy-view.png"></img> 
                    <div className="menuText">
                        All
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default HomeMenu;
