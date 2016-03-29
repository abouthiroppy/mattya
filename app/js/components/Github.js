import React, {
  Component,
  PropTypes
} from 'react';

import github from '../models/github';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pr   : [],
      ready: false
    };

    this._fetchPR();
  }

  _fetchPR() {
    github().then((res) => {
      this.setState({pr: res});
      setTimeout(() => {
        this.setState({ready: true});
      }, 500);
    });
  }

  _createLi(data) {
    return (
      <li className="collection-item">
        <a href={data.url} target="_blank">{data.title}</a>
        <span style={this._initCss().org}>{data.org}</span>
      </li>
    );
  }

  _initCss() {
    return {
      org: {
        color   : '#999',
        display : 'block',
        fontSize: '0.9rem'
      },
      name: {
        color: '#333'
      },
      icon: {
        fontSize: '2rem'
      }
    };
  }

  render() {
    return (
      <div className="row section">
        <div className="col m5 s12">
          <div className="card">
            <div className="card-image">
              <img src="https://avatars0.githubusercontent.com/u/3367801?v=3&s=460" />
              <span className="card-title" style={this._initCss().name}>abouthiroppy</span>
            </div>
            <div className="card-content">
              <a href="https://github.com/abouthiroppy" target="_blank">
                <i className="fa fa-github" style={this._initCss().icon}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col m7 s12">
          <section className="card-panel">
            <h2 className="section-title">Pull Request</h2>
            <ul className="collection with-header">
            {
              this.state.pr.map((e) => {
                return this._createLi(e);
              })
            }
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
