import { List, fromJS } from 'immutable';
import { Contact, Action } from '../../types';

export default (state: List<Contact> = List(), action: Action): List<Contact> => {
  switch (action.type) {
	 	case 'setContacts':
	 		return fromJS(action.data);
	 	case 'setContact':
	 		return state.push(fromJS(action.data));
	  default: return state;
	}
};
