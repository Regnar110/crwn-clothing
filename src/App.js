import React from 'react';
import './App.scss';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop'
import Header from './components/header/Header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import { Switch, Route} from 'react-router-dom';

function App() {

  return (
    <div>
      <Header />
      <Switch>
          <Route exact path={'/'} component={Homepage}/>
          <Route exact path={'/shop'} component={ShopPage}/>
          <Route exact path={'/signin'} component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  )
}

export default App;
