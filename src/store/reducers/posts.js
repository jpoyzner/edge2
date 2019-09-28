export default (state = [], action) => {
  switch (action.type) {
	 	case 'setPosts':
	 		return action.data;
	  default: return state;
	}
};
