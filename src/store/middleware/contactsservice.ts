import { ContactPOJO, Action } from '../../types';

const JSON_SERVER_PORT = 4000;
const CONTACTS_URL = `http://localhost:${JSON_SERVER_PORT}/contacts`;

export default (store: any) => (next: any) => async (action: Action) => {
  next(action);

	try {
    switch (action.type) {
    	case 'getContacts': {
    		const response: ContactPOJO[] = await getContacts();
        next({ type: 'setContacts', data: response });
      	break;
      }
      case 'addContact': {
        const response: ContactPOJO[] = await getContacts();

        const contact: ContactPOJO = {
          id: response.length,
          name: 'Jeff Poyzner',
          number: `+1${action.data.number}`,
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

        next({ type: 'setContact', data: contact });
        break;
      }
      default:
  	}
  } catch (err) {
    console.log(err);
  }
};

async function getContacts(): Promise<ContactPOJO[]> {
  const res = await fetch(CONTACTS_URL);
  return await res.json();
}