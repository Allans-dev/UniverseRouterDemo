import React, { Component } from 'react';
import { planetJsonData } from '../planetData.js';
import { importPlanetData } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navbar from '../components/navbar.js';
import Title from '../components/title.js';
import Footer from '../components/footer.js';


class App extends Component {
    componentWillMount(){
        this.props.importPlanetData(planetJsonData);
    }
    render() {
        return(
            <div>
                <Navbar />
                <Title />
                <Footer />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({ importPlanetData }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
