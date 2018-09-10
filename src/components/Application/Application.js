import React, { Component } from 'react';
import './ApplicationStyle.css';

import data from './applications.json';

class Application extends Component {
  renderApplications() {
    return data.map(app => {
      return (
        <div className="card mb-3" key={app.id}>
          <div className="card-header textCenter">{app.title}</div>
          <div className="card-body">
            <p className="textCenter">
              <a href={app.link} target="_">
                Live
              </a>{' '}
              |{' '}
              <a href={app.github} target="_">
                Repo
              </a>
            </p>
            <p className="card-text">{app.description}</p>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="card-deck application">{this.renderApplications()}</div>
    );
  }
}

export default Application;
