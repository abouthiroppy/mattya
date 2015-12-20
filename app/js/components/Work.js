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

  buildCard(title, color, period, uri) {
    return (
      <div className="col s12 m6">
      <div className="card blue accent-1 medium">
         <div className="card-image">
            <img src="http://about-hiroppy.com/images/flash-bg4.jpg" />
            <span className="card-title">{title}</span>
          </div>
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
      <div className="row section">
        {this.buildCard(
          'Flash',
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
          'http://blog.about-hiroppy.org/'
        )}
        {this.buildCard(
          'ひろっぴーのふろっぴー',
          {
            btnColor : 'amber darken-2',
            cardColor: 'blue accent-1'
          },
          '2012-05-21',
          'http://blog.about-hiroppy.org/'
        )}
        {this.buildCard(
          'ひろっぴーのふろっぴー',
          {
            btnColor : 'amber darken-2',
            cardColor: 'blue accent-1'
          },
          '2012-05-21',
          'http://blog.about-hiroppy.org/'
        )}
      </div>
    );
  }
}
