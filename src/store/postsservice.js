export default store => next => action => {
  next(action);
	switch (action.type) {
  	case 'getPosts':
  		fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(response => {
          //console.log('Success:', JSON.stringify(response));
          next({type: 'setPosts', data: response});
        })
        .catch(error => console.error('Error:', error));	      

    	break;
    default: return false;
	}
};