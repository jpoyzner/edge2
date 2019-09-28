import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import LogService from './middleware/logservice';
import PostsService from './middleware/postsservice';
import TodosService from './middleware/todosservice';
import ContactsService from './middleware/contactsservice';

export default createStore(
	reducers,
	composeWithDevTools(
		applyMiddleware(
			LogService,
			PostsService,
			TodosService,
			ContactsService,
		)));