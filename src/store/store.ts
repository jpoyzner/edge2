import { configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
//import logger from 'redux-logger';
import { todosApi } from './services/Todos';
import { logsApi } from './services/Logs';
import { postsApi } from './services/Posts';
import counter from './reducers/Counter';
import contacts from './reducers/Contacts';
import simpleLoggerMiddleware from './middleware/SimpleLogger';
import Listeners from './middleware/Listeners';

const store = configureStore({
  reducer: {
    counter,
    contacts,
    [todosApi.reducerPath]: todosApi.reducer,
    [logsApi.reducerPath]: logsApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .prepend(Listeners)
    .concat(
      todosApi.middleware,
      logsApi.middleware,
      todosApi.middleware,
      postsApi.middleware,
      simpleLoggerMiddleware,
      //logger,
    ),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export default store;