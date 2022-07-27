import { PayloadAction } from '@reduxjs/toolkit';
import { User, Post } from '../../types';
import { setPosts } from '../reducers/Posts';


export default (store: any) => (next: any) => async (action: PayloadAction<Post[]>) => {
  next(action);
	switch (action.type) {
  	case 'getPosts':
      try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users: User[] = await res.json();
        res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts: Post[] = await res.json();

        const usersMap: Map<number, string> = new Map();
        users.forEach((user: User) => {
          usersMap.set(user.id, user.username);
        });

        next(setPosts(posts.map((post: Post) => ({ ...post, user: usersMap.get(post.userId) }))));
      } catch(err) {
        console.error(err);
      }

    	break;
    default:
  }
};