import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Store from './store/store';
import Counter from './components/Counter';
import './styles/index.scss';

//code split:
const Nav = lazy(() => import('./components/Nav'));
const LogDisplay = lazy(() => import('./components/LogDisplay'));
const Posts = lazy(() => import('./components/Posts'));
const Todos = lazy(() => import('./components/Todos'));
const Contacts = lazy(() => import('./components/Contacts'));
const Hashmaps = lazy(() => import('./components/Hashmaps'));
const Grid = lazy(() => import('./components/Grid'));

export default () => (
  <Provider store={Store}>
		<BrowserRouter>
	  	<Suspense fallback={<div>Loading...</div>}>
				<Routes>
				  <Route path="/" element={<><Nav /><Outlet /></>}>
            <Route path="counter" element={<Counter text="Welcome!" />} />
            <Route path="logs" element={<LogDisplay />} />
            <Route path="posts" element={<Posts />} />
            <Route path="todos" element={<Todos />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="hashmaps" element={<Hashmaps />} />
            <Route path="grid" element={<Grid />} />
          </Route>
				</Routes>
	  	</Suspense>
		</BrowserRouter>
  </Provider>
);