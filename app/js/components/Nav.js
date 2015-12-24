import React, {
  Component,
  PropTypes
} from 'react';
import {
  Link
} from 'react-router';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  _setTitle() {
    this.setState({title: location.hash.split('#/')[1].split('?')[0]});
  }

  _initCss() {
    return {
      btnHamburger: {
        left   : '40px',
        display: 'block'
      },
      hamburgerIcon: {
        fontSize: '1.9rem'
      }
    };
  }

  componentDidMount() {
    const hamburger = $('#btn-hamburger');

    // jQuery was called at index.html
    hamburger.sideNav();

    $('#slide-out a').on('click', () => {
      hamburger.sideNav('hide');
    });
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="global-nav">
          <ul id="slide-out" className="side-nav">
            <li>
              <Link to="/">Root</Link>
            </li>
            <li>
              <Link to="profile">Profile</Link>
            </li>
            <li>
              <Link to="programming">Programming</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="work">Work</Link>
            </li>
            <li>
              <a href="https://github.com/abouthiroppy/mattya">
                <i className="fa fa-github icon"></i>
                &nbsp; Repo
              </a>
            </li>
          </ul>
          <a href="#" className="button-collapse"
            id="btn-hamburger"
            data-activates="slide-out"
            style={this._initCss().btnHamburger}>
            <i className="mdi-navigation-menu"
              style={this._initCss().hamburgerIcon}>
            </i>
          </a>
          <div className="container">
            <span className="title">[WIP]</span>
          </div>
        </nav>
      </div>
    );
  }
}
