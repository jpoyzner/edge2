import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import LogService from './logservice';
export default createStore(reducers, { count: 0, logs: [] }, applyMiddleware(LogService));