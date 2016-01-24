import React, {
  Component,
  PropTypes
} from 'react';

import instagram         from '../../models/instagram';
import CircleColorLoader from '../animation/CircleColorLoader';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      data : [],
      ready: false
    };

    this._fetchInstagram();
  }

  _initCss() {
    return {
      loader: {
        textAlign: 'center'
      }
    };
  }

  _buildSlider(photos) {
    return (
      <div id="slider" className="slider">
        <ul className="slides">
          {photos.map((e, i) => {
            const position = [
              'center-align',
              'left-align',
              'right-align'
            ];
            return (
              <li key={e.id}>
                <img src={e.image}/>
                <div className={`caption ${position[i % 3]}`}>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  _fetchInstagram() {
    instagram().then((res) => {
      const arr = [];

      for (const item of res.data) {
        arr.push({
          link       : item.link,
          like       : item.likes.count,
          image      : item.images.standard_resolution.url,
          description: (item.caption === null ? '' : item.caption.text)
        });
      }

      this.setState({data: arr.splice(0, 8)});

      setTimeout(() => {
        this.setState({ready: true});
      }, 500);
    }).catch((err) => {
      console.error(err);
    });
  }

  componentDidUpdate() {
    if (this.state.ready) {
      $('#slider').slider();
    }
  }

  render() {
    if (this.state.ready) {
      return (
        <div className="col s12 m6 l6">
          <section className="card-panel">
            {this._buildSlider(this.state.data)}
          </section>
        </div>
      );
    }
    else {
      return (
        <div className="col s12 m6 l6" style={this._initCss().loader}>
          <section className="card-panel">
            <CircleColorLoader />
          </section>
        </div>
      );
    }
  }
}
