//I AM USING ASYNC THUNK ACTIONS HERE ONLY AS AN EXAMPLE. SEE services folder for newer createAPI versions:

import { AppThunk } from '../store';
import { Contact } from '../../types';
import { setContacts, setContact } from '../reducers/Contacts';

const JSON_SERVER_PORT = 4000;
const CONTACTS_URL = `http://localhost:${JSON_SERVER_PORT}/contacts`;

export const getContacts = (): AppThunk => async dispatch => {
  try {
    const response: Contact[] = await fetchContacts();
    dispatch(setContacts(response));
  } catch(err) {
    console.error(err);
  }
}

export const addContact = (value: string): AppThunk => async dispatch => {
  try {
    const response: Contact[] = await fetchContacts();

    const contact: Contact = {
      id: response.length,
      name: 'Jeff Poyzner',
      number: `+1${value}`,
      context: 'Edge2',
    };

    await fetch(CONTACTS_URL, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact),
    })

    dispatch(setContact(contact));
  } catch(err) {
    console.error(err);
  }
}

async function fetchContacts(): Promise<Contact[]> {
  const res = await fetch(CONTACTS_URL);
  return await res.json();
}