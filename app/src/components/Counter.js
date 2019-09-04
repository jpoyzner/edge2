import React, { useState } from 'react';
import { connect } from 'react-redux';
import Store from '../store/store';

function Counter(props) {
  const appCount = useAppCount(props.appCount);
  const localCount = useLocalCount(appCount.value)

  function saveToApp() {
    Store.dispatch({ type: 'SET', data: localCount.value });
  }

  return (
    <div>
      <div>{props.text + " "}</div>
      <div>
        <span>App Counter = {appCount.value}</span>{' '}
        <button onClick={appCount.onIncrement}>+</button>{' '}
        <button onClick={appCount.onDecrement}>-</button>{' '}
        <button onClick={appCount.incrementIfOdd}>Increment if odd</button>{' '}
        <button onClick={appCount.incrementAsync}>Increment in one second</button>
      </div>
      <div>
        <span>Local Counter = {localCount.value}</span>{' '}
        <button onClick={localCount.onIncrement}>+</button>{' '}
        <button onClick={localCount.onDecrement}>-</button>{' '}
        <button onClick={localCount.incrementIfOdd}>Increment if odd</button>{' '}
        <button onClick={localCount.incrementAsync}>Increment in one second</button>
        <button onClick={saveToApp}>Save to app count</button>
      </div>
    </div>
  );
}

function useAppCount(count) {
  function increment() {
    Store.dispatch({type: 'INCREMENT'});
  }

  return {
    value: count,
    incrementIfOdd() {
      if (count % 2 !== 0) {
        increment()
      }
    },
    incrementAsync() {
      setTimeout(() => { increment(); }, 1000);
    },
    onIncrement() {
      increment()
    },
    onDecrement() {
      Store.dispatch({type: 'DECREMENT'});
    }
  }
}

function useLocalCount(initialCount) {
  const [count, setCount] = useState(initialCount);

  function increment() {
    setCount(count + 1);
  }

  return {
    value: count,
    incrementIfOdd() {
      if (count % 2 !== 0) {
        increment()
      }
    },
    incrementAsync() {
      setTimeout(() => { increment(); }, 1000);
    },
    onIncrement() {
      increment()
    },
    onDecrement() {
      setCount(count - 1);
    }
  }
}

export default connect((state) => ({ appCount: state.count }))(Counter);

