import { configureStore } from '@reduxjs/toolkit';
import counter from './reducers/Counter';
import logs from './reducers/Logs';
import posts from './reducers/Posts';
import todos from './reducers/Todos';
import contacts from './reducers/Contacts';
import LogService from './middleware/logservice';
import PostsService from './middleware/postsservice';
import TodosService from './middleware/todosservice';
import ContactsService from './middleware/contactsservice';

const store = configureStore({
  reducer: {
    counter,
    logs,
    posts,
    todos,
    contacts,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend([
  	LogService,
  	PostsService,
  	TodosService,
  	ContactsService]),
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;