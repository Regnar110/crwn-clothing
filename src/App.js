import React from 'react';
import './App.scss';
import Homepage from './pages/homepage/Homepage';

import { Switch, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div>
      <Switch>
          <Route exact path={'/'} component={Homepage}/>
      </Switch>
    </div>
  )
}

export default App;
