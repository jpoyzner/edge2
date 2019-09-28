export default (state = 0, action) => {
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
