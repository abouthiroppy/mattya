import React, {
  Component,
  PropTypes
} from 'react';

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

  buildCard(title, img, color, period, uri) {
    return (
      <div className="col s12 m6 l4">
      <div className="card blue accent-1 small">
         <div className="card-image">
            <img src={img} />
            <span className="card-title">{title}</span>
          </div>
          <div className="card-content white-text">
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
    const prefix = 'http://metro.about-hiroppy.com/images/';

    return (
      <div className="row section">
        <h2 className="header page-section-title">Works</h2>
        {this.buildCard(
          'Flash',
          `${prefix}flash-bg1.jpg`,
          {
            btnColor : 'amber darken-2',
            cardColor: 'blue accent-1'
          },
          '2012-03-18',
          'http://about-hiroppy.com/metro/flash/'
        )}
        {this.buildCard(
          '楽ラク顔文字(仮)',
          `${prefix}kaomozi.jpg`,
          {
            btnColor : 'amber darken-2',
            cardColor: 'blue accent-1'
          },
          '2011-06-17',
          'http://blog.about-hiroppy.org/'
        )}
        {this.buildCard(
          'Labelial',
          `${prefix}labelial.png`,
          {
            btnColor : 'amber darken-2',
            cardColor: 'blue accent-1'
          },
          '2013-10-07',
          'http://about-hiroppy.com/Labelial/index.html'
        )}
        {this.buildCard(
          'AOJ_Compare',
          `${prefix}compare.png`,
          {
            btnColor : 'amber darken-2',
            cardColor: 'blue accent-1'
          },
          '2012-05-09',
          'http://about-hiroppy.com/Labelial/index.html'
        )}
        {this.buildCard(
          'AOJ_Compare_n',
          `${prefix}compare.png`,
          {
            btnColor : 'amber darken-2',
            cardColor: 'blue accent-1'
          },
          '2012-06-21',
          'http://about-hiroppy.com/Labelial/index.html'
        )}
        {this.buildCard(
          'あおいちゃん@AOJ',
          `${prefix}aoi.png`,
          {
            btnColor : 'amber darken-2',
            cardColor: 'blue accent-1'
          },
          '2011-05-09',
          'http://about-hiroppy.com/Labelial/index.html'
        )}

      </div>
    );
  }
}
