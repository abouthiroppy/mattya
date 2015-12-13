import {Component} from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        <H2>Profile</H2>
        <section>ここはProfileだよ。</section>
        {this.props.children}
      </div>
    );
  }
}
