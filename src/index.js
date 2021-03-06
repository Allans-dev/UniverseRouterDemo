import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar.js';
import Home from './components/home.js';
import BrowseAll from './containers/browseAll.js';
import BrowseNeighbours from './containers/browseNeighbours.js';
import BrowseRegion from './containers/browseRegion.js';
import Footer from './components/footer.js';



const store = configureStore();

store.subscribe(() => {
    console.log('index: ', store.getState());
});

function envCheck() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return <Route exact path="/" component={Home} />
      } else {
        return <Route exact path="/UniverseRouterDemo" component={Home} />
      }
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/browseNeighbours" component={BrowseNeighbours} />
                    <Route path="/browseRegion" component={BrowseRegion} />
                    <Route path="/browseAll" component={BrowseAll} />
                    {envCheck()}   
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
        , document.querySelector('.container'));
