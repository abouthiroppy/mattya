import React, {
  Component,
  PropTypes
} from 'react';

import Blog   from './dashboard/Blog';
import Travis from './dashboard/Travis';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Travis />
        <Blog />
      </div>
    );
  }
}
