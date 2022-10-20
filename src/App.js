
import './App.css';
import React from 'react';
import Header from './common/header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Switch>
          <Route path='./' exact>
            <About/>
          </Route>
        </Switch> */}
      </Router>
      <Header />



    </>
  );
}

export default App;
