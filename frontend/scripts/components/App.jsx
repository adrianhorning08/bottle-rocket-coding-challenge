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
          <h1>Lunch Tyme</h1>
          <div className="map-icon"></div>
        </header>
        <Route exact path ="/" component={MainContainer} />
    </div>
);

export default App;
