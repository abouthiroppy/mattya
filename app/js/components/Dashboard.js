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

  render() {
    return (
      <div>
        <Menu />
        <Travis />
        <Blog />
      </div>
    );
  }
}
