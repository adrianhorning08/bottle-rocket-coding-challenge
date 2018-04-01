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
            <div className="dummy-icon"></div>
            <h1>Lunch Tyme</h1>
            <div className="map-icon">
              <img src="http://res.cloudinary.com/dqw6az5ot/image/upload/v1522614719/icon_map_2x.png"></img>
            </div>
          </div>
        </header>
        <Route exact path ="/" component={MainContainer} />
    </div>
);

export default App;
