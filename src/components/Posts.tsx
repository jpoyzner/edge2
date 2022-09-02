import React from 'react';
import { Post } from '../types';
import { useGetPostsQuery } from '../store/services/Posts';
import './Posts.scss';

export default function() {
  const { data: posts, refetch, isFetching } = useGetPostsQuery();

  return (
    <>
      <div id="posts-page">
        {(!isFetching && posts && posts.length) ?
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
      <button onClick={refetch}>ATTEMPT REFETCH</button>
    </>
  );
}