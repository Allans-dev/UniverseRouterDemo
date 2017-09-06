import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar.js';
import Title from './components/title.js';
import BrowseAll from './containers/browseAll.js';
import BrowseNeighbours from './containers/browseNeighbours.js';
import BrowseRegion from './containers/browseRegion.js';
import Footer from './components/footer.js';



const store = configureStore();

store.subscribe(() => {
    console.log('index: ', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/browseNeighbours" component={BrowseNeighbours} />
                    <Route path="/browseRegion" component={BrowseRegion} />
                    <Route path="/browseAll" component={BrowseAll} />
                    <Route path="/" component={Title} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
        , document.querySelector('.container'));
