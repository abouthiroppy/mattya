import React, {
  Component,
  PropTypes
} from 'react';

export default class extends Component {
  initCss() {
    return {
      circleIcon: {
        verticalAlign: 'middle'
      },
      cardTitle: {
        fontSize  : '1.5rem',
        marginLeft: '10px'
      },
      cardTitleBox: {
        marginBottom: '10px'
      },
      javascript: {
        color     : '#765af1',
        background: '#f1e05a'
      },
      nodejs: {
        color     : '#765af1',
        background: '#f1e05a'
      },
      coffeescript: {
        color     : '#c28614',
        background: '#244776'
      },
      typescript: {
        color     : '#cdc0ac',
        background: '#007acd'
      },
      actionscript: {
        color     : '#4a887c',
        background: '#882b0f'
      },
      go: {
        color     : '#ababab',
        background: '#375eab'
      },
      php: {
        color     : '#958257',
        background: '#4f5d95'
      },
      cpp: {
        color     : '#f3f3f3',
        background: '#a6234a'
      },
      moonscript: {
        color     : '#667f6d',
        background: '#ccc'
      }
    };
  }

  buildCard(lang, icon) {
    return (
      <div className="col s12 m6 l4">
        <div style={this.initCss()[lang]} className="card">
          <div className="card-content">
            <div style={this.initCss().cardTitleBox}>
            <img src={icon} style={this.initCss().circleIcon} className="circle-icon" />
            <span style={this.initCss().cardTitle} classNamName="card-title">{lang}</span>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="row section">
        {this.buildCard(
          'javascript',
          'http://i.stack.imgur.com/Mmww2.png'
        )}
        {this.buildCard(
          'nodejs',
          'https://node-os.com/images/nodejs.png'
        )}
        {this.buildCard(
          'coffeescript',
          'https://pbs.twimg.com/profile_images/557241144392708096/slQydAMv.png'
        )}
        {this.buildCard(
          'typescript',
          'https://pbs.twimg.com/profile_images/2660272602/87a5a0fdc86455c3f94b0b0eebfdb1b9_400x400.png'
        )}
        {this.buildCard(
          'actionscript',
          'http://blog.teliaz.com/wp-content/uploads/2008/06/actionscripticon_400.png'
        )}
        {this.buildCard(
          'go',
          'https://railskey.files.wordpress.com/2014/05/golang-sh-600x600.png'
        )}
        {this.buildCard(
          'php',
          'http://php.net//images/logos/php-med-trans-light.gif'
        )}
        {this.buildCard(
          'cpp',
          'http://www.bioinfohub.com/wp-content/uploads/2015/05/Calculator-Icon.png'
        )}
        {this.buildCard(
          'moonscript',
          'https://camo.githubusercontent.com/4af51706dd39969c7bb6573906b940b85d0e94fd/687474703a2f2f6c6561666f2e6e65742f64756d702f7361696c6f726d6f6f6e7363726970742e706e67'
        )}
      </div>
    );
  }
}
