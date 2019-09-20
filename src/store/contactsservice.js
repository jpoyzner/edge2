import Store from '../store/store';

const JSON_SERVER_PORT = 4000;
const CONTACTS_URL = `http://localhost:${JSON_SERVER_PORT}/contacts`;

export default store => next => action => {
  next(action);
	switch (action.type) {
  	case 'getContacts':
  		getContacts().then((response) => {
        next({ type: 'setContacts', data: response });
      }) 

    	break;
    case 'addContact':
      getContacts().then((response) => {
        fetch(CONTACTS_URL, {
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
        .then(() => {
          Store.dispatch({type: 'getContacts'});
        });
      }) ;

      break;
    default: return false;
	}
};

function getContacts() {
  return new Promise((resolve) => {
    fetch(CONTACTS_URL)
      .then(res => res.json())
      .then(response => {
        //console.log('Success:', JSON.stringify(response));
        resolve(response);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
}