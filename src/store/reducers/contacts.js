export default (state = [], action) => {
  switch (action.type) {
	 	case 'setContacts':
	 		return action.data;
	  default: return state;
	}
};
