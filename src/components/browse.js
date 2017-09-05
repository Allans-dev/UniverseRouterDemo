import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Browse extends Component {
    render() {
        return(
            <div>Display</div>
        );
    }
}


function mapStateToProps({ planets }, ownProps) {
    return { planets };
}

export default connect(mapStateToProps)(Browse);