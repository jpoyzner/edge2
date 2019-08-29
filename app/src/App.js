import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Store from './store/store';
import Nav from './components/Nav';
import Counter from './components/Counter';
import LogDisplay from './components/LogDisplay';
import Posts from './components/Posts';

export default () => (
	<Provider store={Store}>
	  <Router>
	  	<div>
	    	<Route path="/" component={Nav} />
				<Route path="/a" render={() => <Counter text="Welcome!" />} />
				<Route path="/b" component={LogDisplay} />
				<Route path="/c" component={Posts} />
			</div>
	  </Router>
	</Provider>
);