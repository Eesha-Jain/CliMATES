import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Front from './Front';
import About from './About';
import Carbon from './Carbon';
import Energy from './Energy';
import Water from './Water';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Front} />
        <Route path='/about' component={About} />
        <Route path='/carbon' component={Carbon} />
        <Route path='/energy' component={Energy} />
        <Route path='/water' component={Water} />
      </Switch>
    </Router>
  );
}

export default App;