import { configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import counter from './reducers/Counter';
import logs from './reducers/Logs';
import posts from './reducers/Posts';
import todos from './reducers/Todos';
import contacts from './reducers/Contacts';

const store = configureStore({
  reducer: {
    counter,
    logs,
    posts,
    todos,
    contacts,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export default store;