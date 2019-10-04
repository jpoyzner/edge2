import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { Post } from '../types';
import './Posts.scss';

interface StateProps {
  appPosts: List<Post>;
}

interface DispatchProps {
  getPosts(): void;
}

type Props = StateProps & DispatchProps;

const Posts: SFC<Props> = (props) => {
  const posts: List<Post> = useAppPosts(props.appPosts, props);

  return (
    <div id="posts-page">
      {posts.size ?
        posts.map((post: Post) => {
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

function useAppPosts(posts: List<Post> , props: DispatchProps): List<Post> {
  if (!posts.size) {
    (async () => {
      await delay(2000);
      props.getPosts();
    })();
  }

  return posts;
}

function delay(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
}

export default connect(
  (state: Map<string, any>): StateProps => ({
    appPosts: state.get('posts'),
  }),
  (dispatch): DispatchProps => ({
    getPosts() {
      dispatch({ type: 'getPosts' });
    }
  }),
)(Posts);
