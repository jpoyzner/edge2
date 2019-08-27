export default (state, action) => {
  switch (action.type) {
	 	case 'INCREMENT':
	 		state.count++;
	 		return state;
    case 'DECREMENT':
    	state.count--;
    	return state;	
	  default: return false;
	}
};
