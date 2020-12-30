import React from 'react';
import './App.scss';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop'

import { Switch, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div>
      <Switch>
          <Route exact path={'/'} component={Homepage}/>
          <Route exact path={'/shop'} component={ShopPage}/>
      </Switch>
    </div>
  )
}

export default App;
