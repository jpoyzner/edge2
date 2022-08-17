import { User, Post } from '../../types';
import { setPosts } from '../reducers/Posts';
import { AppThunk } from '../store';

export const getPosts = (): AppThunk => async dispatch => {
  try {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();
    res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();

    const usersMap: Map<number, string> = new Map();
    users.forEach((user: User) => {
      usersMap.set(user.id, user.username);
    });

    dispatch(setPosts(posts.map((post: Post) => ({ ...post, user: usersMap.get(post.userId) }))));
  } catch(err) {
    console.error(err);
  }
}