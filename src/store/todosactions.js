export default (state, action) => {
  switch (action.type) {
	 	case 'gotTodos':
	 		state.todos = action.data;
	 		return state;
	  default: return false;
	}
};
