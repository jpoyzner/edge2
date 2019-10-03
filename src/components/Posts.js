import React from 'react';
import { connect } from 'react-redux';
import './Posts.scss';

function Posts(props) {
  const posts = useAppPosts(props.appPosts, props);

  return (
    <div id="posts-page">
      {posts.size ?
        posts.map((post) => {
          return (
            <div key={post.get('id')}>
              <div>USER: {post.get('user')}</div>
              <div>TITLE: {post.get('title')}</div>
              <div>BODY: {post.get('body')}</div>
              <br />
            </div>
          );
        })
        : "LOADING..."
      }
    </div>
  );
}

function useAppPosts(posts, props) {
  if (!posts.size) {
    (async () => {
      await delay(2000);
      props.getPosts();
    })();
  }

  return posts;
}

function delay(time) {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
}

export default connect(
  (state) => ({ appPosts: state.get('posts') }),
  (dispatch) => ({
    getPosts() {
      dispatch({ type: 'getPosts' });
    }
  }),
)(Posts);
