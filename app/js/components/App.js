import React, {
  Component
} from 'react';

import Nav from './Nav';

export default class extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          {this.props.children}
        </div>
        <footer></footer>
      </div>
    );
  }
}
