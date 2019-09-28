export default (state = [], action) => {
  switch (action.type) {
	 	case 'gotTodos':
	 		return action.data;
	  default: return state;
	}
};
