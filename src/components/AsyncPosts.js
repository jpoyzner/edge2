import React, { Fragment } from 'react';

export default function AsyncPosts(props) {
  return (
     <Fragment>
      {props.posts.map((post) => {
        return (
          <div key={post.id}>
            {/*<div>USER: {usersMap[post.userId]}</div>*/}
            <div>TITLE: {post.title}</div>
            <div>BODY: {post.body}</div>
            <br />
          </div>
        );
      })}
    </Fragment>
  );
}