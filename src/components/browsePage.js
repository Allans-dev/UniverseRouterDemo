import React from 'react';
import { Link } from 'react-router-dom';
import PlanetDetails from './planetDetails.js';

const browsePage = (props) => {
    return (
        <div className="browsePage">
            <div className="row">
                <div className="browseDisplay">
                    <div className="topBar">
                        <span className="left">{props.number} planets available</span>
                        <Link to="/"><span className="right">Back</span></Link>
                    </div>
                    <PlanetDetails data={props.data} />
                </div>
            </div>
        </div>
    );
}

export default browsePage;