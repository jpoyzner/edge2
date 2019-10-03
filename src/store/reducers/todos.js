import { List, fromJS } from 'immutable';

export default (state = List(), action) => {
  switch (action.type) {
	 	case 'gotTodos':
	 		return fromJS(action.data);
	  default: return state;
	}
};
