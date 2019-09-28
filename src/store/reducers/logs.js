export default (state = '', action) => {
  switch (action.type) {
	 	case 'GOTLOGS':
	 		return action.data;
	  default: return state;
	}
};
