import { Action } from '../../types';

export default (state: string = '', action: Action) => {
  switch (action.type) {
	 	case 'GOTLOGS':
	 		return action.data;
	  default: return state;
	}
};
