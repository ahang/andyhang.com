import React, { Component } from 'react';
import './EducationStyle.css';

import data from './education.json';

class Education extends Component {
  renderEducation() {
    return data.map(edu => {
      return (
        <li key={edu.id}>
          <a href={edu.link} target="_">
            {' '}
            {edu.school}
          </a>
          <p className="experienceTextStyle">{edu.year}</p>
          <p>{edu.degree}</p>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="col-md-4 edu">
        <ul>
          <h5>Education</h5>
          {this.renderEducation()}
        </ul>
      </div>
    );
  }
}

export default Education;
