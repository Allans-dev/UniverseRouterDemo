import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { importDisplayData } from '../actions';
import _ from 'lodash';

class BrowseAll extends Component {
//    componentWillMount(){
//        
//    }
    
    render() {
        return(
            <div>Display All</div>
        );
    }
}


function mapStateToProps({ planets }, ownProps) {
    return { planets };
}

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({ importDisplayData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseAll);