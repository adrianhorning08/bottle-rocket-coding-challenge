import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import MainContainer from './mainContainer';

const App = () => (
    <div>
        <header>
          <div className="header-contents">
            <div className="back-icon"></div>
            <h1>Lunch Tyme</h1>
            <div className="map-icon"></div>
          </div>
        </header>
        <Route exact path ="/" component={MainContainer} />
    </div>
);

export default App;
