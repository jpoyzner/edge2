import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/store';
import Counter from './Counter';
import { ReactWrapper } from 'enzyme';

test('Counter counts', () => {
  const text: string = "blahblah";

  const app: ReactWrapper = mount(
    <Provider store={store}>
      <Counter text={text} />
    </Provider>
  );

  const component: ReactWrapper = app.find('Counter');
  expect(component).toMatchSnapshot();

  expect(component.find('.jp-counter-text').text()).toEqual(text);

  const props: any = component.props();
  props.increment();
  props.increment();
  props.increment();
  expect(component.find('.jp-counter-count').text()).toEqual('App Counter = 3');
});

