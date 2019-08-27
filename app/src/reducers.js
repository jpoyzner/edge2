//import {browserHistory} from 'react-router';

export default (state, action) => {
  	console.log(`ACTION: ${action.type}`);

  	switch (action.type) {
    	case '@@redux/INIT': state = {count: 0, logs: []};
    	case 'INCREMENT': state.count++; break;
    	case 'DECREMENT': state.count--; break;	
    	case 'GOTLOGS': state.logs = action.data; break
  	}

  	console.log(state);

  	return state;
}
