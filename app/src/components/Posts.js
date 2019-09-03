import React, { useState } from 'react';
import { connect } from 'react-redux';
import Store from '../store/store';

function Posts(props) {
  const usersMap = useUsersMap({})
  // const posts = usePosts([]); //local state version
  const posts = useAppPosts(props.appPosts);

  return (
    <div id="posts-page">
      {posts.length ?
        posts.map((post) => {
          return (
            <div key={post.id}>
              <div>USER: {usersMap[post.userId]}</div>
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
    getDelayedPosts().then((action) => {
      Store.dispatch({type: action});
    });
  }

  return posts;
}

function getDelayedPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('getPosts');
    }, 2000);
  });
}

export default connect((state) => ({
  appPosts: state.posts,
}))(Posts);
