import React from 'react';
import './Counter.scss';
import Store from '../store/store';

function incrementIfOdd() {
  if (Store.getState().count % 2 !== 0) {
    onIncrement();
  }
}

function incrementAsync() {
  setTimeout(onIncrement, 1000);
}

function onIncrement() {
  Store.dispatch({type: 'INCREMENT'});
}

function onDecrement() {
  Store.dispatch({type: 'DECREMENT'});
}

export default (props) => {
  return (
    <p>
      {props.text + " "}Counter = {Store.getState().count}{' '}
      <button onClick={onIncrement}>+</button>
      {' '}
      <button onClick={onDecrement}>-</button>
      {' '}
      <button onClick={incrementIfOdd}>Increment if odd</button>
      {' '}
      <button onClick={incrementAsync}>Increment in one second</button>
    </p>
  );
}