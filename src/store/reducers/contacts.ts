import { List, fromJS } from 'immutable';
import { Action } from '../../types';

export default (state: any = List(), action: Action) => {
  switch (action.type) {
	 	case 'setContacts':
	 		return fromJS(action.data);
	 	case 'setContact':
	 		return state.push(fromJS(action.data));
	  default: return state;
	}
};
