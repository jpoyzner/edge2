import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { setContacts, setContact } from '../reducers/Contacts';

const listenerMiddleware = createListenerMiddleware()
listenerMiddleware.startListening({
  actionCreator: setContacts,
  effect: async (action, listenerApi) => {
    console.log('Contacts: ', action.payload);
    localStorage.setItem('contacts', JSON.stringify(action.payload));
    //TODO: set cookie also
  },
});

listenerMiddleware.startListening({
  predicate:
    (action: any, currentState: any, previousState: any) =>
      currentState.contacts.value.length !== previousState.contacts.value.length,
  effect: async (action, listenerApi) => {
    if (await listenerApi.condition(isAnyOf(setContact))) {
      console.log('New contact: ', action.payload);
    }
  },
});

// listenerMiddleware.startListening({
//   predicate: () => true,
//   effect: async (action, listenerApi) => {
//     console.log(action);
//   },
// });

listenerMiddleware.startListening({
  type: 'postsApi/executeQuery/fulfilled',
  effect: async (action, listenerApi: any) => {
    const posts: any = listenerApi.getState().postsApi.queries['getPosts(undefined)'].data;
    console.log(posts);
  },
});

export default listenerMiddleware.middleware;