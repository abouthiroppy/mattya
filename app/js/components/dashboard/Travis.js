import React, {
  Component,
  PropTypes
} from 'react';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      data : [],
      ready: false
    };

    this._fetchTravis();
  }

  _initCss() {
    return {
      error: {
        borderLeft: '3px solid #d94341'
      },
      passing: {
        borderLeft: '3px solid #44a662'
      },
      errorMessage: {
        color: '#d94341'
      },
      passingMessage: {
        color: '#44a662'
      }
    };
  }

  _fetchTravis() {
    const uri = 'https://api.travis-ci.org/repos/abouthiroppy/mattya/builds';
    const res = [];

    $.get(uri, (data) => {
      data.forEach((item) => {
        res.push({
          uri       : `https://travis-ci.org/abouthiroppy/mattya/builds/${item.id}`,
          state     : item.state,
          commit    : item.commit,
          branch    : item.branch,
          result    : item.result,
          message   : item.message,
          duration  : item.duration,
          eventType : item.event_type,
          finishedAt: item.finished_at
        });
      });
      this.setState({data: res});
      setTimeout(() => {
        this.setState({ready: true});
      }, 500);
    });
  }

  _buildTravisCollection(item) {

    // [TODO] research result
    const result  = item.result === null ? this._initCss().error : this._initCss().passing;
    const message = item.result === null ?
      this._initCss().errorMessage : this._initCss().passingMessage;

    return (
      <a className="collection-item" style={result} href={item.uri} target="_blank">
        <span className="title" style={message}>{item.message}</span>
        <div className="row">
          <div className="col s12 l8">
            <p>
              <i className="fa fa-github-alt"></i>
              &nbsp;{item.branch}
            </p>
            <p>
              <i className="fa fa-github-alt"></i>
              &nbsp;{item.commit}
            </p>
          </div>
          <div className="col s12 l4">
            <p>type: {item.eventType}</p>
            <p>duration: {item.duration}s</p>
            <p>finished_at: {item.finishedAt}</p>
          </div>
        </div>
      </a>
    );
  }

  render() {
    if (this.state.ready) {
      return (
        <div className="row section">
          <h2 className="header page-section-title">Travis</h2>
          <ul className="collection">
            {this._buildTravisCollection(this.state.data[0])}
            {this._buildTravisCollection(this.state.data[1])}
            {this._buildTravisCollection(this.state.data[2])}
          </ul>
        </div>
      );
    }
    else {
      return (
        <div className="row section">
          <h2 className="header page-section-title">Travis</h2>
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        </div>
      );
    }
  }
}
