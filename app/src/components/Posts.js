import React, { useState } from 'react';
import { connect } from 'react-redux';
import Store from '../store/store';

function Posts(props) {
  const usersMap = useUsersMap({})
  // const posts = usePosts([]); //local state version
  const posts = useAppPosts(props.appPosts);

  return (
    <div id="posts-page">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <div>USER: {usersMap[post.userId]}</div>
            <div>TITLE: {post.title}</div>
            <div>BODY: {post.body}</div>
            <br />
          </div>
        );
      })}
    </div>
  );
}

function useUsersMap(initialUsers) {
  const [userMap, setUserMap] = useState(initialUsers);

  if (!Object.keys(userMap).length) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(response => {
        //console.log('Success:', JSON.stringify(response));

        const newUserMap = {};
        response.forEach((user) => {
          newUserMap[user.id] = user.username;
        });

        setUserMap(newUserMap);
      })
      .catch(error => console.error('Error:', error));
  }

  return userMap;
}

// function usePosts(initialPosts) { //local state version
//   const [posts, setPosts] = useState(initialPosts);

//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(response => {
//       //console.log('Success:', JSON.stringify(response));

//       setPosts(response);
//     })
//     .catch(error => console.error('Error:', error));

//   return posts;
// }

function useAppPosts(posts) { //reddux version
  if (!posts.length) {
    Store.dispatch({type: 'getPosts'});
  }

  return posts;
}

export default connect((state) => ({
  appPosts: state.posts,
}))(Posts);
