import React from 'react';

export default (props) => {
  function gotoA() {
    props.history.push('/a');
  }

  function gotoB() {
    props.history.push('/b');
  }

  function gotoC() {
    props.history.push('/c');
  }

  return (
    <div id="jp-nav">
      <div onClick={gotoA}>GOTO A</div>
      <div onClick={gotoB}>GOTO B</div>
      <div onClick={gotoC}>GOTO C</div>
    </div>
  );
}
