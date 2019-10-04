import { Action, UserPOJO, PostPOJO } from '../../types';

export default (store: any) => (next: any) => async (action: Action) => {
  next(action);
	switch (action.type) {
  	case 'getPosts':
      try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users: UserPOJO[] = await res.json();
        res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts: PostPOJO[] = await res.json();

        const usersMap: Map<number, string> = new Map();
        users.forEach((user: UserPOJO) => {
          usersMap.set(user.id, user.username);
        });

        next({type: 'setPosts', data: posts.map((post: PostPOJO) => ({ ...post, user: usersMap.get(post.userId) })) });
      } catch(err) {
        console.error(err);
      }

    	break;
    default:
  }
};