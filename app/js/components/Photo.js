'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

import instagram from '../models/instagram';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : [],
      ready: false
    };

    instagram().then((res) => {
      const arr = [];

      for (const item of res.data) {
        arr.push({
          link       : item.link,
          like       : item.likes.count,
          image      : item.images.standard_resolution.url,
          description: item.caption.text
        });
      }

      this.setState({data: arr});

      setTimeout(() => {
        this.setState({ready: true});
      }, 500);
    }).catch((err) => {
      console.error(err);
    });
  }

  _initCss() {
    return {
      row: {
        minHeight: '500px'
      },
      progress: {
        marginTop: '200px'
      }
    };
  }

  _buildCard(e) {
    return (
      <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-image">
            <img src={e.image} className="responsive-img materialboxed"/>
            <span className="card-title">{e.description}
            <a href={e.link} target="_blank">Link</a>
            </span>
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    if (this.state.ready) {
      $('.materialboxed').materialbox();
    }
  }

  render() {
    if (this.state.ready) {
      return (
        <div className="row section" style={this._initCss().row}>
          {this.state.data.map((e) => {
            return this._buildCard(e);
          })}
        </div>
      );
    }
    else {
      return (
        <div className="row section" style={this._initCss().row}>
          <div className="progress" style={this._initCss().progress}>
            <div className="indeterminate"></div>
          </div>
        </div>
      );
    }
  }
}
