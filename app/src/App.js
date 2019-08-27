import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Counter from './components/Counter';
import LogDisplay from './components/LogDisplay';

export default () => (
  <Router>
  	<div>
    	<Route path="/" component={Nav} />
			<Route path="/a" render={() => <Counter text="Welcome!" />} />
			<Route path="/b" component={LogDisplay} />
		</div>
  </Router>
);