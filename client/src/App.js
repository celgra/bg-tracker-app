import React, { Component } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app header-fixed sidebar-fixed">
        <Header {...this.props} />
        <div className="app-body">
          <Sidebar />
          <Main />
        </div>
        <footer className="app-footer">
        </footer>
      </div>
    );
  }
}

export default App;
