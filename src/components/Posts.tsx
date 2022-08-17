import React from 'react';
import { Post } from '../types';
import { useAppSelector, useAppDispatch } from './hooks';
import { getPosts } from '../store/middleware/PostsActions';
import './Posts.scss';

export default function() {
  const appPosts = useAppSelector((state) => state.posts.value);
  const posts: Post[] = useAppPosts(appPosts);

  return (
    <div id="posts-page">
      {posts.length ?
        posts.map((post: Post) => {
          return (
            <div key={post.id}>
              <div>USER: {post.user}</div>
              <div>TITLE: {post.title}</div>
              <div>BODY: {post.body}</div>
              <br />
            </div>
          );
        })
        : "LOADING..."
      }
    </div>
  );
}

function useAppPosts(posts: Post[]): Post[] {
  const dispatch = useAppDispatch();

  if (!posts.length) {
    (async () => {
      await delay(2000);
      dispatch(getPosts());
    })();
  }

  return posts;
}

function delay(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
}
