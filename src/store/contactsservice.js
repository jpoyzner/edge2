import Store from '../store/store';

const JSON_SERVER_PORT = 4000;
const CONTACTS_URL = `http://localhost:${JSON_SERVER_PORT}/contacts`;

export default store => next => async action => {
  next(action);

	try {
    switch (action.type) {
    	case 'getContacts': {
    		const response = await getContacts();
        next({ type: 'setContacts', data: response });
      	break;
      }
      case 'addContact': {
        const response = await getContacts();
        await fetch(CONTACTS_URL, {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: response.length,
            name: 'Jeff Poyzner',
            number: `+1${action.data.number}`,
            context: 'Edge2',
          })
        })

        Store.dispatch({type: 'getContacts'});
        break;
      }
      default: return false;
  	}
  } catch (err) {
    console.log(err);
  }
};

async function getContacts() {
  const res = await fetch(CONTACTS_URL);
  return await res.json();
}