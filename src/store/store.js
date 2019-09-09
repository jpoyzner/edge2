import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers'
import LogService from './logservice';
import PostsService from './postsservice';
import TodosService from './todosservice';
import ContactsService from './contactsservice';

export default createStore(
	reducers, {
		count: 0,
		logs: [],
		posts: [],
		todos: [],
		usersMap: {},
		contacts: null,
	},
	composeWithDevTools(
		applyMiddleware(
			LogService,
			PostsService,
			TodosService,
			ContactsService,
		)));