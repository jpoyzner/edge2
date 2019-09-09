import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Store from './store/store';
import Nav from './components/Nav';
import Counter from './components/Counter';
import LogDisplay from './components/LogDisplay';
import Posts from './components/Posts';
import Todos from './components/Todos';
import Contacts from './components/Contacts';
import './index.scss';

export default () => (
	<Provider store={Store}>
	  <Router>
	  	<div>
	    	<Route path="/" component={Nav} />
				<Route path="/counter" render={() => <Counter text="Welcome!" />} />
				<Route path="/logs" component={LogDisplay} />
				<Route path="/posts" component={Posts} />
				<Route path="/todos" component={Todos} />
				<Route path="/contacts" component={Contacts} />
			</div>
	  </Router>
	</Provider>
);