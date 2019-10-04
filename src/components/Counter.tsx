import React, { SFC, useState } from 'react';
import { connect } from 'react-redux';

interface OwnProps {
  text: string;
}

interface StateProps {
  appCount: number;
}

interface DispatchProps {
  increment(): void;
  decrement(): void;
  save(data: number): void;
}

type Props = StateProps & DispatchProps & OwnProps;

const Counter: SFC<Props> = (props) => {
  const appCount: AppCountState = useAppCount(props.appCount, props);
  const localCount: LocalCountState = useLocalCount(appCount.value, props);

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

interface AppCountState {
  value: number;
  incrementIfOdd(): void;
  incrementAsync(): void;
  onIncrement(): void;
  onDecrement(): void;
}

function useAppCount(count: number, props: DispatchProps): AppCountState {
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

interface LocalCountState {
  value: number;
  incrementIfOdd(): void;
  incrementAsync(): void;
  onIncrement(): void;
  onDecrement(): void;
  save(): void;
}

function useLocalCount(initialCount: number, props: DispatchProps): LocalCountState {
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
  (state: Map<string, any>, ownProps: OwnProps): StateProps => ({
    appCount: state.get('counter'),
  }),
  (dispatch, ownProps: OwnProps): DispatchProps => ({
    increment() {
      dispatch({ type: 'INCREMENT' });
    },
    decrement() {
      dispatch({ type: 'DECREMENT' });
    },
    save(data: number) {
      dispatch({ type: 'SET', data });
    }
  }),
)(Counter);
