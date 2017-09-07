import React from 'react';
import _ from 'lodash';

const PlanetDetails = (props) => {
    
    function randomImage () {
        const imgArr = [    <img alt="planet-photo" src="./imgs/pic1.jpeg"></img>,
                            <img alt="planet-photo" src="./imgs/pic2.jpeg"></img>,
                            <img alt="planet-photo" src="./imgs/pic4.jpg"></img>,
                            <img alt="planet-photo" src="./imgs/pic5.jpg"></img>
                        ];   
        return (
            imgArr[Math.floor(Math.random() * (imgArr.length))]
        );
    }
    
    function details (value, key, obj) {
        return (
            <div key={value} className="planetDetails">
                <div className="name left">{value}</div>
                <div className="price right">{props.data[value].mass * 7375} billion Bitcoins</div>
                <div className="left">
                    <figure>{randomImage()}</figure>
                </div>
                <div className="right">
                    <button className="buyBtn">BUY</button><button className="rentBtn">RENT</button>
                    <div className="mass">Mass: {props.data[value].mass} Jupiters</div>
                    <div className="radius">Radius: {props.data[value].radius}</div>
                    <div className="axis">Axis-tilt: {props.data[value].semi_major_axis}</div>
                    <div className="year">Length of year: {props.data[value].orbital_period} Earth Days</div>
                    <div className="discovery">Year of Discovery: {props.data[value].discovered}</div>
                </div>
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