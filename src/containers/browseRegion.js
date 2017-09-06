import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { importDisplayData } from '../actions';
import _ from 'lodash';

class BrowseRegion extends Component {
    render() {
        return(
            <div>Display Region</div>
        );
    }
}


function mapStateToProps({ planets }, ownProps) {
    return { planets };
}

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({ importDisplayData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseRegion);