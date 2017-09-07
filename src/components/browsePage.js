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
                        <span className="right"><Link to="/">Back</Link></span>
                    </div>
                    <PlanetDetails data={props.data} />
                    <div className="botBar">
                        <span className="left">realuniverse.com</span>
                        <span className="right"><Link to="/">Back</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default browsePage;