import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BloodGlucoseMonthLog from './containers/BloodGlucoseMonthLog';

//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header navbar">
        </header>
        <div className="app-body">
          <main className="main">
            <div>
              <Switch>
                <Route exact path={`/`} component={BloodGlucoseMonthLog} />
              </Switch>
            </div>
          </main>
        </div>
        <footer className="app-footer">
        </footer>
      </div>
    );
  }
}

export default App;
