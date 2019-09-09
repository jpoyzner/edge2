export default (state, action) => {
  switch (action.type) {
	 	case 'setPosts':
	 		state.posts = action.data;
	 		return state;
	  default: return false;
	}
};
