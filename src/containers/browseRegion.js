import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { importDisplayData } from '../actions';
import _ from 'lodash';

import BrowsePage from '../components/browsePage.js';

class BrowseRegion extends Component {
    render() {
        return(
            <BrowsePage />
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