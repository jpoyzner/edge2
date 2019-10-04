import { Action } from '../../types';

export default (store: any) => (next: any) => async (action: Action) => {
  next(action);

	switch (action.type) {
  	case 'GETLOGS':
      try {
        const res = await fetch('/logs/' + action.data);
        const response = await res.json();
        next({type: 'GOTLOGS', data: response});
      } catch(err) {
        console.error(err);
      }

    	break;
    default:
	}
};