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
      <div className="navbar-fixed">
        <nav className="global-nav">
          <div className="container">
            <ul>
              <li>
                <Link to="/" className="waves-effect">
                  <i className="fa fa-home icon">&nbsp;Home</i>
                </Link>
              </li>
              <li>
                <Link to="profile" className="waves-effect">
                  <i className="fa fa-male icon">&nbsp;Profile</i>
                </Link>
              </li>
              <li>
                <Link to="programming" className="waves-effect">
                  <i className="fa fa-desktop icon"></i>
                </Link>
              </li>
              <li>
                <Link to="blog" className="waves-effect">
                  <i className="fa fa-pencil icon"></i>
                </Link>
              </li>
              <li>
                <Link to="work" className="waves-effect">
                  <i className="fa fa-briefcase icon">&nbsp;work</i>
                </Link>
              </li>
              <li>
                <a href="http://github.com/abouthiroppy">
                  <i className="fa fa-github icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
