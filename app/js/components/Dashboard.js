import React, {
  Component,
  PropTypes
} from 'react';

import Menu   from './Dashboard/Menu';
import Blog   from './dashboard/Blog';
import Travis from './dashboard/Travis';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sha: '',
      uri: ''
    };

    this._fetchLastCommit();
  }

  _initCss() {
    return {
      lastCommitLabel: {
        marginTop: '15px'
      },
      travisBadge: {
        verticalAlign: 'middle'
      }
    };
  }

  _fetchLastCommit() {
    const uri        = 'https://api.github.com/repos/abouthiroppy/mattya/git/refs/heads/master';
    const repoPrefix = 'https://github.com/abouthiroppy/mattya/commit/';

    $.get(uri, (res) => {
      this.setState({sha: res.object.sha});
      this.setState({uri: `${repoPrefix}${res.object.sha}`});
    });
  }

  render() {
    return (
      <div>
      <div className="card-panel teal lighten-1" style={this._initCss().lastCommitLabel}>
        <p className="orange-text" style={{fontWeight: 500}}>[WIP] Unfinished!!</p>
        <span className="white-text text-darken-4">
          <i className="fa fa-github-alt"></i>
          &nbsp;Latest Commit on Github:&nbsp;
          <a className="white-text text-darken-4" href={this.state.uri} target="_blank">
            {this.state.sha}
          </a>
        </span>
        <img className="right" style={this._initCss().travisBadge}
          src="https://travis-ci.org/abouthiroppy/mattya.svg?branch=master" />
      </div>
        <Menu />
        <Blog />
        <Travis />
      </div>
    );
  }
}
