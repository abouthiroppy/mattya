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
      btn: {
        width       : '140px',
        marginBottom: '10px'
      }
    };
  }

  _build(path, title) {
    return (
      <div className="col s6 m6 l4">
        <Link to={path} className="waves-effect waves-light btn"
          style={this._initCss().btn}>{title}</Link>
      </div>
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m6 l6">
          <h2 className="header page-section-title">Menu</h2>
          {this._build('/profile', 'Profile')}
          {this._build('/programming', 'lang')}
          {this._build('/blog', 'Blog')}
          {this._build('/work', 'work')}
        </div>
        <div className="col s12 m6 l6">
          <h2 className="header page-section-title">Social?</h2>
        </div>
      </div>
    );
  }
}
