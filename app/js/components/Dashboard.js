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
      <div className="card-panel teal lighten-2">Teach last version at git</div>
        <Menu />
        <Blog />
        <Travis />
      </div>
    );
  }
}
