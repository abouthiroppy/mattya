import React, {
  Component,
  PropTypes
} from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  _initCss() {
    return {
      socialLink: {
        fontSize: '1.5rem'
      },
      historyYear: {
        fontSize   : '1.3rem',
        marginRight: '15px'
      }
    };
  }

  render() {
    return (
      <div className="row section">
        <div className="col m5 s12">
          <div className="card">
            <div className="card-image">
              <img src="http://inumo-nekomo.jp/wp-content/uploads/2014/08/38e60929b6eaf06218989d3a0456b19b2.jpg" />
              <span className="card-title">Yuta Hiroto</span>
            </div>
            <div className="card-content">
              <p>I am a programmer.</p>
              <p>I love Dreams Come True and Acid Black Cherry.</p>
              <br />
              <p>mail: contact[at]about-hiroppy.com</p>
            </div>
            <div className="card-action">
              <a href="https://twitter.com/about_hiroppy" target="_blank">
                <i className="fa fa-twitter" style={this._initCss().socialLink}></i>
              </a>
              <a href="https://www.facebook.com/abouthiroppy" target="_blank">
                <i className="fa fa-facebook" style={this._initCss().socialLink}></i>
              </a>
              <a href="https://github.com/abouthiroppy" target="_blank">
                <i className="fa fa-github" style={this._initCss().socialLink}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col m7 s12">
          <section className="card-panel">
            <h2 className="section-title">History</h2>
            <ul className="collection with-header">
              <li className="collection-item">
                <span style={this._initCss().historyYear}>2015</span>
                <span>Dwango</span>
              </li>
              <li className="collection-item">
                <span style={this._initCss().historyYear}>2014</span>
                <span>Eyes, JAPAN</span>
              </li>
              <li className="collection-item">
                <span style={this._initCss().historyYear}>2013</span>
                <span>Cyber Agent(InternShip)</span>
              </li>
              <li className="collection-item">
                <span style={this._initCss().historyYear}>2012</span>
                <span>Cloud</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
