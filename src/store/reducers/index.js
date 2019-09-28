import { combineReducers } from 'redux';
import counter from './counter';
import logs from './logs';
import posts from './posts';
import todos from './todos';
import contacts from './contacts';

export default combineReducers({
  counter,
  logs,
  posts,
  todos,
  contacts,
})