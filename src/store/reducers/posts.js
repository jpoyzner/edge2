import { List, fromJS } from 'immutable';

export default (state = List(), action) => {
  switch (action.type) {
	 	case 'setPosts':
	 		return fromJS(action.data);
	  default: return state;
	}
};
