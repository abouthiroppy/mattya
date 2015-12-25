import React, {
  Component,
  PropTypes
} from 'react';

import Blog from './dashboard/Blog';

export default class extends Component {
  initCss() {
    return {
      SocialLink: {
        fontSize: '1.5rem'
      },
      historyYear: {
        fontSize   : '1.3rem',
        marginRight: '15px'
      }
    };
  }

  buildCard(title, color, period, uri) {
    return (
      <div className="col s12 m6">
        <div className="card blue accent-1">
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <p>start on {period}</p>
          </div>
          <div className="card-action">
            <a className="waves-effect waves-light btn {color.btnColor}" href={uri}>Link</a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="row section">
          <h2 className="header page-section-title">New Articles</h2>
          <Blog />
        </div>
        <div className="row section">
          <h2 className="header page-section-title">Blogs</h2>
          {this.buildCard(
            'sketchbook',
            {
              btnColor : 'amber darken-2',
              cardColor: 'blue accent-1'
            },
            '2015-04-26',
            'http://blog.about-hiroppy.org/'
          )}
          {this.buildCard(
            'ひろっぴーのふろっぴー',
            {
              btnColor : 'amber darken-2',
              cardColor: 'blue accent-1'
            },
            '2012-05-21',
            'http://d.hatena.ne.jp/about_hiroppy/'
          )}
          {this.buildCard(
            'つくえのなか',
            {
              btnColor : 'amber darken-2',
              cardColor: 'blue accent-1'
            },
            '2012-12-06',
            'http://about-hiroppy.hatenablog.com/'
          )}
          {this.buildCard(
            'Boost study group in IPL',
            {
              btnColor : 'amber darken-2',
              cardColor: 'blue accent-1'
            },
            '2012-06-28',
            'https://sites.google.com/site/boostmianqianghuiinipl/'
          )}
        </div>
      </div>
    );
  }
}
