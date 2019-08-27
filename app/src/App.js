import React, {Component} from 'react';
import {BrowserRouter as Router, Route, browserHistory, Link} from 'react-router-dom';
import Nav from './Nav';
import Counter from './Counter';
import LogDisplay from './LogDisplay';

export default () => (
  	<Router>
  		<div>
    		<Route path="/" component={Nav} />
			<Route path="/a" render={() => <Counter text="Welcome!" />} />
			<Route path="/b" component={LogDisplay} />
		</div>
  	</Router>
);