import React, { useState } from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  const appCount = useAppCount(props.appCount, props);
  const localCount = useLocalCount(appCount.value, props);

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
        <button onClick={localCount.save}>Save to app count</button>
      </div>
    </div>
  );
}

function useAppCount(count, props) {
  return {
    value: count,
    incrementIfOdd() {
      if (count % 2 !== 0) {
        props.increment();
      }
    },
    incrementAsync() {
      setTimeout(() => props.increment(), 1000);
    },
    onIncrement() {
      props.increment()
    },
    onDecrement() {
      props.decrement();
    },
  }
}

function useLocalCount(initialCount, props) {
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
    },
    save() {
      props.save(count);
    }
  }
}

export default connect(
  (state) => ({ appCount: state.counter }),
  (dispatch) => ({
    increment() {
      dispatch({ type: 'INCREMENT' });
    },
    decrement() {
      dispatch({ type: 'DECREMENT' });
    },
    save(data) {
      dispatch({ type: 'SET', data });
    }
  }),
)(Counter);

