import { List, fromJS } from 'immutable';
import Action from '../../models/Action';
import Contact from '../../models/Contact';

export default (state: List<Contact> = List(), action: Action): List<Contact> => {
  switch (action.type) {
	 	case 'setContacts':
	 		return fromJS(action.data);
	 	case 'setContact':
	 		return state.push(fromJS(action.data));
	  default: return state;
	}
};
