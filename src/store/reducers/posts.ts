import { List, fromJS } from 'immutable';
import { Action, Post } from '../../types';

export default (state: List<Post> = List(), action: Action) => {
  switch (action.type) {
	 	case 'setPosts':
	 		return fromJS(action.data);
	  default: return state;
	}
};
