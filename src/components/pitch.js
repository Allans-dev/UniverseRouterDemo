import React from 'react';
import { Link } from 'react-router-dom';

const Pitch = () => {
    
    return (
        <div className="row">
            <div className="pitch-box">
                <div className="pitch">
                    <div className="world">Out of this world:</div>
                    <div className="views">Views</div>
                    <div></div>
                    <div className="location">Location</div>
                    <div></div>
                    <div className="experience">Experience</div>
                    <div className="life"><Link to='/realuniverse/browseNeighbours'>Life</Link></div>
                </div>
            </div>
        </div>
        
    );
}

export default Pitch;