import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { importDisplayData } from '../actions';
import _ from 'lodash';

class BrowseNeighbours extends Component {
//    componentWillMount(){
////            const neighbours = _.mapkeys(action.payload.list, (function (value, key) {
////                        console.log(action.payload.list);
////                        return key;  
////                    }));
//    }
    
    render() {
        return(
            <div>Display Neighbours</div>
        );
    }
}


function mapStateToProps({ planets }, ownProps) {
    return { planets };
}

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({ importDisplayData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseNeighbours);