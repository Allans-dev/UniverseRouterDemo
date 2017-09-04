import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { importNeighbourData, importRegionData, importAllData } from '../actions';


class HomeMenu extends Component {
    
    render(){
        return (
            <div className="homeMenu">
                <Link to="/neighbours" onClick={this.props.importNeighbourData}>
                    <div>
                        <img alt="earth-and-moon-icon" src="imgs/earth-and-moon.png"></img> 
                        Neighborhood<br/>
                        (less than 50 parsecs)
                    </div>
                </Link>
                <Link to="/region" onClick={this.props.importRegionData}>
                    <div>
                        <img alt="solar-system-icon" src="imgs/solar-system.png"></img> 
                        Regional<br/>
                        (less than 200 parsecs)
                    </div>
                </Link>
                <Link to="/all" onClick={this.props.importAllData}>
                    <div>
                        <img alt="galaxy-icon" src="imgs/galaxy-view.png"></img> 
                        All
                    </div>
                </Link>
            </div>
        );
    }
}

function mapStateToProps({ planets }, ownProps) {
    return { planets }
}

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({importNeighbourData, importRegionData, importAllData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMenu);
