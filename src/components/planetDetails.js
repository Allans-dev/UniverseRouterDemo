import React from 'react';
import _ from 'lodash';

const PlanetDetails = (props) => {
    
    function randomImage () {
        const imgArr = [    <img alt="planet-photo" src="../imgs/pic1.jpeg"></img>,
                            <img alt="planet-photo" src="../imgs/pic2.jpeg"></img>,
                            <img alt="planet-photo" src="../imgs/pic4.jpg"></img>,
                            <img alt="planet-photo" src="../imgs/pic5.jpg"></img>
                        ];   
        return (
            imgArr[Math.floor(Math.random() * (imgArr.length))]
        );
    }
    
    function details (value, key, obj) {
        return (
            <div key={value} className="planetDetails">
                <div>Name {value}</div>
                <figure>{randomImage()}</figure>
                <div>{props.data[value].mass}</div>
            </div>
        );
    }
    
    let arr = _.keys(props.data);
    
    return (
        <div className="details-box">
            {arr.map(details)}
        </div>
    );
}

export default PlanetDetails;