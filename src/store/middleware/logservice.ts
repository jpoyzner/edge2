import { PayloadAction } from '@reduxjs/toolkit';
import { gotLogs } from '../reducers/Logs';


export default (store: any) => (next: any) => async (action: PayloadAction<string>) => {
  next(action);

	switch (action.type) {
  	case 'GETLOGS':
      try {
        const res = await fetch('/logs/' + action.payload);
        const response = await res.json();
        next(gotLogs(response));
      } catch(err) {
        console.error(err);
      }

    	break;
    default:
	}
};