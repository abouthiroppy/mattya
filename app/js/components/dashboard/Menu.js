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
      },
      socialCard: {
        textAlign: 'center'
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
          {this._build('/profile', 'profile')}
          {this._build('/programming', 'lang')}
          {this._build('/blogs', 'blogs')}
          {this._build('/works', 'works')}
        </div>
        <div className="col s12 m6 l6">
          <h2 className="header page-section-title">Social</h2>
          <section className="card-panel" style={this._initCss().socialCard}>
          <a className="twitter-timeline"
            href="https://twitter.com/about_hiroppy"
            data-widget-id="679095752254169088" height="10px">
            Tweets by @about_hiroppy
          </a>
          </section>
        </div>
      </div>
    );
  }
}
