import Store from './store';
import React, {Component} from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div id="jp-nav">
        <div onClick={this.gotoA}>GOTO A</div>
        <div onClick={this.gotoB}>GOTO B</div>
      </div>
    );
  }

  gotoA = () => {
    this.props.history.push('/a');
    Store.dispatch({type: 'GOTOA'});
  }

  gotoB = () => {
    this.props.history.push('/b');
    Store.dispatch({type: 'GOTOB'});
  }
}
