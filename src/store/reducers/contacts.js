import { List, fromJS } from 'immutable';

export default (state = List(), action) => {
  switch (action.type) {
	 	case 'setContacts':
	 		return fromJS(action.data);
	 	case 'setContact':
	 		return state.push(fromJS(action.data));
	  default: return state;
	}
};
