import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login.component";
import Profile from "./components/profile.component"
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/profile" component={Profile} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  };
}

export default App;
