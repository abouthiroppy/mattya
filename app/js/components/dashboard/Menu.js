import React, {
  Component,
  PropTypes
} from 'react';

import {
  Link,
  Route,
  Router,
  ReactRouter
} from 'react-router';

export default class extends Component {
  constructor() {
    super();
  }

  _initCss() {
    return {
      btnOuter: {
        textAlign: 'center'
      },
      btn: {
        width       : '140px',
        marginBottom: '10px'
      }
    };
  }

  _build(path, title) {
    return (
      <div className="col s6 m6 l4" style={this._initCss().btnOuter}>
        <Link to={path} className="waves-effect waves-light btn"
          style={this._initCss().btn}>{title}</Link>
      </div>
    );
  }

  render() {
    return (
      <div className="">
          <h2 className="header page-section-title">Menu</h2>
          {this._build('/profile', 'profile')}
          {this._build('/programming', 'lang')}
          {this._build('/blogs', 'blogs')}
          {this._build('/works', 'works')}
          {this._build('/photos', 'photos')}
          {this._build('/works', 'works')}
      </div>
    );
  }
}
