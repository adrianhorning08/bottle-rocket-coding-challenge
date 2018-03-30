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
          Lunch Tyme
        </header>
        <Route exact path ="/" component={MainContainer} />
    </div>
);

export default App;
