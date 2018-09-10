import React, { Component } from 'react';
import './HeaderStyle.css';
import data from './social.json';

class Header extends Component {
  renderSocialLinks() {
    return data.map(social => {
      return (
        <li key={social.type}>
          <a className={social.class} href={social.link} target="_blank" />
        </li>
      );
    });
  }
  render() {
    return (
      <div className="col-md-6 divHeaderStyle">
        <h3>
          <hr className="hrStyle" />
          Hello. I'm <span className="spanTextStyle">Andy Hang</span>, a web
          application developer currently living and working in Chicago, IL.
        </h3>
        <div className="socialLinksStyle">
          <ul className="nav justify-content-center">
            {this.renderSocialLinks()}
          </ul>
        </div>
        <hr className="hrStyle-noMarginTop" />
      </div>
    );
  }
}

export default Header;
