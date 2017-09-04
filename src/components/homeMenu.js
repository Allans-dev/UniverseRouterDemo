import React from 'react';

const HomeMenu = () => {
    return (
        <div className="homeMenu">
            <div>
                <img alt="earth-and-moon-icon" src="imgs/earth-and-moon.png"></img> 
                Neighborhood<br/>
                (less than 50 parsecs)
            </div>
            <div>
                <img alt="solar-system-icon" src="imgs/solar-system.png"></img> 
                Regional<br/>
                (less than 200 parsecs)
            </div>
            <div>
                <img alt="galaxy-icon" src="imgs/galaxy-view.png"></img> 
                All
            </div>
        </div>
    );
}

export default HomeMenu;
