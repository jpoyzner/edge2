export default (state, action) => {
  switch (action.type) {
	 	case 'SET':
	 		state.count = action.data;
	 		return state;
	 	case 'INCREMENT':
	 		state.count++;
	 		return state;
    case 'DECREMENT':
    	state.count--;
    	return state;	
	  default: return false;
	}
};
