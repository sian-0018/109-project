import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styles from './App.scss';
import HomePage from './page/Homepage_33';
// import HomePage2_xx from './pages/HomePage2_33';
import Header from './components/Header';
// import Body from './components/Body';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route exact path='/all' component={HomePage2} /> */}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;