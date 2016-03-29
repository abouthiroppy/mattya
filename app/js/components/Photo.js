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

    this._fetchInstagram();
  }

  _initCss() {
    return {
      row: {
        minHeight: '500px'
      },
      progress: {
        marginTop: '200px'
      },
      cardTitle: {
        width     : '100%',
        padding   : '10px',
        fontSize  : '1.1rem',
        background: 'rgba(0, 0, 0, .6)'
      },
      cardTitleSpan: {
        display     : 'block',
        overflow    : 'hidden',
        whiteSpace  : 'nowrap',
        textOverflow: 'ellipsis'
      },
      link: {
        color: '#00e5ff'
      },
      likeCounter: {
        color  : '#ff80ab',
        float  : 'right',
        display: 'block'
      }
    };
  }

  _buildCard(e) {
    return (
      <div className="col s6 m4 l2">
        <div className="card">
          <div className="card-image">
            <img className="responsive-img materialboxed"src={e.image}/>
            <div className="card-title" style={this._initCss().cardTitle}>
              <span style={this._initCss().cardTitleSpan}>{e.description}</span>
              <a href={e.link} target="_blank" style={this._initCss().link}>
                <i className="fa fa-external-link"></i>
              </a>
              <div className="like-counter" style={this._initCss().likeCounter}>
                <i className="fa fa-heart-o"></i>
                <span>&nbsp;{e.like}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _fetchInstagram() {
    instagram().then((res) => {
      const arr = [];

      for (const item of res.data) {
        arr.push({
          link : item.link,
          like : item.likes.count,
          image: item.images.standard_resolution.url
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
