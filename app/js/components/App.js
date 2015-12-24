import React, {
  Component
} from 'react';

import Nav from './Nav';
import Footer from './Footer';

export default class extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
