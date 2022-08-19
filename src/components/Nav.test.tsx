import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from './Nav';

let container;

beforeEach(() => {
  container = render(<Nav />);
});

afterEach(() => {
  container.unmount();
  container = null;
});

it('has counter text', () => {
  expect(screen.getByText('RENDER COUNTER')).toBeInTheDocument();
});
