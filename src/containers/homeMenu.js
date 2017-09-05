import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { importNeighbourData, importRegionData, importAllData } from '../actions';


class HomeMenu extends Component {
    constructor(props){
        super(props);
        this.handleClick50 =this.handleClick50.bind(this);
        this.handleClick200 =this.handleClick200.bind(this);
        this.handleClickAll =this.handleClickAll.bind(this);
    }
    
    handleClick50(e) {
        console.log('click called');
        importNeighbourData(this.props.planets);
    }
    
    handleClick200(e) {
        importRegionData(this.props.planets);
    }
    
    handleClickAll(e) {
        importAllData(this.props.planets);
    }
    
    render(){
        return (
            <div className="homeMenu">
                <div>
                    <Link to="/browse" onClick={this.handleClick50}>
                        <img alt="earth-and-moon-icon" src="imgs/earth-and-moon.png"></img> 
                        Neighbourhood<br/>
                        (less than 50 parsecs)
                    </Link>
                </div>
                <div>
                    <Link to="/browse" onClick={this.handleClick200}>
                        <img alt="solar-system-icon" src="imgs/solar-system.png"></img> 
                        Regional<br/>
                        (less than 200 parsecs)
                    </Link>
                </div>
                <div>
                    <Link to="/browse" onClick={this.props.handleClickAll}>
                        <img alt="galaxy-icon" src="imgs/galaxy-view.png"></img> 
                        All
                    </Link>
                </div>
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
