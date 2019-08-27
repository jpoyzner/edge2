export default (state, action) => {
  switch (action.type) {
	 	case 'GOTLOGS':
	 		state.logs = action.data;
	 		return state;
	  default: return false;
	}
};
