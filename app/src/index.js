import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));
Store.subscribe(render);

render();
//Store.dispatch({type: 'GETLOGS'});
