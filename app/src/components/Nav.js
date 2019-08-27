import React from 'react';
import Store from '../store/store';

export default (props) => {
  function gotoA() {
    props.history.push('/a');
    Store.dispatch({type: 'GOTOA'});
  }

  function gotoB() {
    props.history.push('/b');
    Store.dispatch({type: 'GOTOB'});
  }

  return (
    <div id="jp-nav">
      <div onClick={gotoA}>GOTO A</div>
      <div onClick={gotoB}>GOTO B</div>
    </div>
  );
}
