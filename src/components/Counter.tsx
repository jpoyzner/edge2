import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import { set, increment, decrement } from '../store/reducers/Counter';

// interface MapObject {
//   [key: string]: number
// }

interface Props {
  text: string;
}

export default function({ text }: Props) {
  // const sampleMapObject: MapObject = {};
  // sampleMapObject["four"] = 4;

  const appCount = useAppSelector((state) => state.counter.value);
  const localCount: LocalCountState = useLocalCount(appCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="jp-counter-text">{text}</div>
      <div>
        <span className="jp-counter-count">{`App Counter = ${appCount}`}</span>{' '}
        <button onClick={() => dispatch(increment())}>+</button>{' '}
        <button onClick={() => dispatch(decrement())}>-</button>{' '}
        <button onClick={() => appCount % 2 !== 0 && dispatch(increment())}>Increment if odd</button>{' '}
        <button onClick={() => setTimeout(() => dispatch(increment()), 1000)}>Increment in one second</button>
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

interface LocalCountState {
  value: number;
  incrementIfOdd(): void;
  incrementAsync(): void;
  onIncrement(): void;
  onDecrement(): void;
  save(): void;
}

function useLocalCount(initialCount: number): LocalCountState {
  const dispatch = useAppDispatch();
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
      setTimeout(() => increment(), 1000);
    },
    onIncrement() {
      increment()
    },
    onDecrement() {
      setCount(count - 1);
    },
    save() {
      dispatch(set(count));
    }
  }
}