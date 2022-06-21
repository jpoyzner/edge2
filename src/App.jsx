import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Store from './store/store';
import Counter from './components/Counter';
import './styles/index.scss';

//code split:
const Nav = lazy(() => import('./components/Nav'));
const LogDisplay = lazy(() => import('./components/LogDisplay'));
const Posts = lazy(() => import('./components/Posts'));
const Todos = lazy(() => import('./components/Todos'));
const Contacts = lazy(() => import('./components/Contacts'));

export default () => (
  <Provider store={Store}>
		<Router>
	  	<Suspense fallback={<div>Loading...</div>}>
				<>
				  <Route path="/" component={Nav} />
				  <Route path="/counter" render={() => <Counter text="Welcome!" />} />
				  <Route path="/logs" component={LogDisplay} />
				  <Route path="/posts" component={Posts} />
				  <Route path="/todos" component={Todos} />
				  <Route path="/contacts" component={Contacts} />
				</>
	  	</Suspense>
		</Router>
  </Provider>
);