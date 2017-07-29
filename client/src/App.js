import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import BloodGlucoseMonthLog from './containers/BloodGlucoseMonthLog';

//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header {...this.props} />
        <div className="app-body">
          <main className="main" style={{marginTop: 20}}>
            <div>
              <Switch>
                <Route exact path="/" component={BloodGlucoseMonthLog} />
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
