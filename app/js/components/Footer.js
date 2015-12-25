import React, {
  Component,
  PropTypes
} from 'react';
import {
  Link
} from 'react-router';

export default class extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l4 s6">
              <h5 className="white-text">Sites</h5>
              <a className="grey-text text-lighten-4"
                href="http://metro.about-hiroppy.com"
                target="_blank">
                <i className="fa fa-windows"></i>
                &nbsp;Metro
              </a>
            </div>
            <div className="col l4 s6">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3"
                    href="https://twitter.com/about_hiroppy"
                    target="_blank">
                    <i className="fa fa-twitter"></i>
                    &nbsp;Twitter
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3"
                    href="https://www.facebook.com/abouthiroppy"
                    target="_blank">
                    <i className="fa fa-facebook"></i>
                    &nbsp;&nbsp;Facebook
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3"
                    href="https://github.com/abouthiroppy"
                    target="_blank">
                    <i className="fa fa-github"></i>
                    &nbsp;Github
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l4 s12">
              <h5 className="white-text">License</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3">React</a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3">React-Router</a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3">Materialize</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2015 - 2016 Copyright about_hiroppy, All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
}
