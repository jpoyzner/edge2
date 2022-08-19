//great example here: https://itnext.io/testing-components-with-jest-and-react-testing-library-d36f5262cde2

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from "react-dom/test-utils";
import Store from '../store/store';
import Counter from './Counter';
import { increment } from '../store/reducers/Counter';

const text: string = "blahblah";
let container;

beforeEach(() => {
  container =
    render(
      <Provider store={Store}>
        <Counter text={text} />
      </Provider>
    );
});

afterEach(() => {
  container.unmount();
  container = null;
});

test('Counter counts', () => {
  expect(document.querySelector('.jp-counter')).toMatchSnapshot();
  expect(document.querySelector('.jp-counter-text').innerHTML).toBe(text);

  act(() => {
    Store.dispatch(increment());
    Store.dispatch(increment());
    Store.dispatch(increment());
  });
  
  expect(screen.getByText('App Counter = 3')).toBeInTheDocument();

  const button = document.querySelector(".jp-app-increment");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(screen.getByText('App Counter = 4')).toBeInTheDocument();
});

