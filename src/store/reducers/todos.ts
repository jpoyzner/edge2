import { List, fromJS } from 'immutable';
import { Action } from '../../types';

export default (state: List<string> = List(), action: Action) => {
  switch (action.type) {
	 	case 'gotTodos':
	 		return fromJS(action.data);
	  default: return state;
	}
};
