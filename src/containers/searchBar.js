import React, { Component } from 'react';

import { planetJsonData } from '../planetData.js';
import { importPlanetData } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
    
    componentWillMount(){
        this.props.importPlanetData(planetJsonData);
    }
    
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChange(event) {
        this.setState({ term: event.target.value });
  }
    
    onFormSubmit(event) {
        event.preventDefault();
        this.setState({ term: '' });
  }
    
    render(){
        return(
            <div className="searchBar">
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        placeholder="Search from 131 available planets"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <button type="submit">Search</button>
                </form>
                
            </div>
        );
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({ importPlanetData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);