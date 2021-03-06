import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { importDisplayData } from '../actions';
import _ from 'lodash';

import BrowsePage from '../components/browsePage.js';

class BrowseRegion extends Component {
    
    componentWillMount(){
        
        const region = _.omitBy(this.props.planets.list, function (value, key){
            if (value.star_distance > 200) {
                return value;
            }
        });
        
        this.props.importDisplayData(region);
    }
    
    render() {
        let arr = _.keys(this.props.displayData.list);
        let numberOfPlanets = arr.length;
        return(
            <BrowsePage data={this.props.displayData.list} number={numberOfPlanets}/>
        );
    }
}


function mapStateToProps({ planets, displayData }, ownProps) {
    return { planets, displayData };
}

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({ importDisplayData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseRegion);