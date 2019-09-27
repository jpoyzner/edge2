import React from 'react';
import { connect } from 'react-redux';

function Posts(props) {
  const posts = useAppPosts(props.appPosts, props);

  return (
    <div id="posts-page">
      {posts.length ?
        posts.map((post) => {
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

function useAppPosts(posts, props) {
  if (!posts.length) {
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
  (state) => ({ appPosts: state.posts }),
  (dispatch) => ({
    getPosts() {
      dispatch({ type: 'getPosts' });
    }
  }),
)(Posts);
