import React, {
  Component,
  PropTypes
} from 'react';

import Menu   from './Dashboard/Menu';
import Blog   from './dashboard/Blog';
import Travis from './dashboard/Travis';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  _initCss() {
    return {
      travisBadge: {
        verticalAlign: 'middle'
      }
    };
  }

  render() {
    return (
      <div>
      <div className="card-panel teal lighten-2">Teach last version at git
        <img style={this._initCss().travisBadge} className="right"
          src="https://travis-ci.org/abouthiroppy/mattya.svg?branch=master" />
      </div>
        <Menu />
        <Blog />
        <Travis />
      </div>
    );
  }
}
