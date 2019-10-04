import { Action } from '../../types';

export default (state: number = 0, action: Action) => {
  switch (action.type) {
	 	case 'SET':
	 		return action.data;
	 	case 'INCREMENT':
	 		return ++state;
    case 'DECREMENT':
    	return --state;
	  default: return state;
	}
};
