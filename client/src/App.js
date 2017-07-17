import React, { Component } from 'react';
import { Route, Switch , Link} from 'react-router-dom';
import BloodGlucoseMonth from './containers/BloodGlucoseMonth';
import Test from './components/Test';

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
                <Route path={`/test`} component={Test} />
                <Route exact path={`/`} component={BloodGlucoseMonth} />
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
