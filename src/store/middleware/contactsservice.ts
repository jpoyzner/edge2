import { PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../types';
import { setContacts, setContact } from '../reducers/Contacts';

const JSON_SERVER_PORT = 4000;
const CONTACTS_URL = `http://localhost:${JSON_SERVER_PORT}/contacts`;

export default (store: any) => (next: any) => async (action: PayloadAction<Contact>) => {
  next(action);

	try {
    switch (action.type) {
    	case 'getContacts': {
    		const response: Contact[] = await getContacts();
        next(setContacts(response));
      	break;
      }
      case 'addContact': {
        const response: Contact[] = await getContacts();

        const contact: Contact = {
          id: response.length,
          name: 'Jeff Poyzner',
          number: `+1${action.payload}`,
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

        next(setContact(contact));
        break;
      }
      default:
  	}
  } catch (err) {
    console.log(err);
  }
};

async function getContacts(): Promise<Contact[]> {
  const res = await fetch(CONTACTS_URL);
  return await res.json();
}