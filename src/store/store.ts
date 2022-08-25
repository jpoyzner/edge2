import { configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { todosApi } from './services/Todos';
import { logsApi } from './services/Logs';
import counter from './reducers/Counter';
import posts from './reducers/Posts';
import contacts from './reducers/Contacts';

const store = configureStore({
  reducer: {
    counter,
    posts,
    contacts,
    [todosApi.reducerPath]: todosApi.reducer,
    [logsApi.reducerPath]: logsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware, logsApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export default store;