export default store => next => async action => {
  next(action);
	switch (action.type) {
  	case 'getPosts':
      try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await res.json();

        const usersMap = {};
        users.forEach((user) => {
          usersMap[user.id] = user.username;
        });

        next({type: 'setPosts', data: posts.map((post) => ({ ...post, user: usersMap[post.userId] })) });
      } catch(err) {
        console.error(err);
      }

    	break;
    default: return false;
	}
};