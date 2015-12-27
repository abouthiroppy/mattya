import React, {
  Component,
  PropTypes
} from 'react';

import tweet from '../../models/tweet';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      data : [],
      ready: false
    };

    tweet().then((res) => {
      setTimeout(() => {
        this.setState({data: res});
        this.setState({ready: true});
      }, 500);
    });
  }

  _initCss() {
    return {
      container: {
        height: '480px'
      },
      list: {
        height  : '380px',
        overflow: 'scroll'
      },
      tweetInfo: {
        color   : '#888',
        fontSize: '0.9rem'
      },
      link: {
        marginLeft: '10px'
      },
      user: {
        textAlign: 'center'
      },
      icon: {
        width  : '100px',
        height : '100px',
        margin : '50px auto',
        display: 'block'
      }
    };
  }

  componentDidUpdate() {
    if (this.state.ready) {
      $('#tabs').tabs();
    }
  }

  render() {
    if (this.state.ready) {
      const icon = this.state.data.user.profile_image_url.replace(/\s+/g, '');

      return (
        <div className="col s12 m6 l6">
          <section className="card-panel" style={this._initCss().container}>
            <ul id="tabs" className="tabs">
              <li className="tab col s6">
                <a className="active" href="#timeline">Timeline</a>
              </li>
              <li className="tab col s6">
                <a href="#test2" href="#user">about_hiroppy</a>
              </li>
            </ul>
            <div id="timeline" className="col s12">
              <ul className="collection" style={this._initCss().list}>
                {this.state.data.tweets.map((e) => {
                  return (
                    <li className="collection-item avatar">
                      <img src={icon} className="circle" />
                      <p className="title">{e.text}</p>
                      <div className="tweet-info" style={this._initCss().tweetInfo}>
                        <span>{e.createdAt} via: {e.source}</span>
                        <a href={`https://twitter.com/about_hiroppy/status/${e.id}`}
                          target="_blank">
                          <i className="fa fa-external-link" style={this._initCss().link}></i>
                        </a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div id="user" className="col s12" style={this._initCss().user}>
              <img className="circle-icon"
                style={this._initCss().icon}
                src={icon} />
              <h4>{this.state.data.user.user_name}</h4>
              <h5>{this.state.data.user.screen_name}</h5>
            </div>
          </section>
        </div>
      );
    }
    else {
      return (
        <div className="col s12 m6 l6">
          <section className="card-panel" style={this._initCss().container}>
          </section>
        </div>
      );
    }
  }
}
