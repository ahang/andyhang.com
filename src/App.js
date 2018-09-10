import React, { Component } from 'react';
import Header from './components/Header/Header';
import Work from './components/Work/Work';
import Application from './components/Application/Application';
import Education from './components/Education/Education';

import './AppStyle.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="col-md-12 row centerAddMargin">
          <Work />
          <Education />
        </div>
        <h5 className="appTitleStyle">Applications Developed</h5>
        <Application />
      </div>
    );
  }
}

export default App;
