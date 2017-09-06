import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { importDisplayData } from '../actions';
import _ from 'lodash';

import BrowsePage from '../components/browsePage.js';

class BrowseAll extends Component {
    componentWillMount(){
        this.props.importDisplayData(this.props.planets.list);
    }
    
    render() {
        return(
            <BrowsePage data={this.props.displayData} />
        );
    }
}


function mapStateToProps({ planets, displayData }, ownProps) {
    return { planets, displayData };
}

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({ importDisplayData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseAll);