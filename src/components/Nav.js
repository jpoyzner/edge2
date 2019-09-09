import React from 'react';
import './Nav.scss';

export default (props) => {
  function gotoCounter() {
    props.history.push('/counter');
  }

  function gotoLogs() {
    props.history.push('/logs');
  }

  function gotoPosts() {
    props.history.push('/posts');
  }

  function gotoTodos() {
    props.history.push('/todos');
  }

  function gotoContacts() {
    props.history.push('/contacts');
  }

  return (
    <div id="jp-nav">
      <span onClick={gotoCounter}>RENDER COUNTER</span>
      <span onClick={gotoLogs}>RENDER LOGS</span>
      <span onClick={gotoPosts}>RENDER POSTS</span>
      <span onClick={gotoTodos}>RENDER TODOS</span>
      <span onClick={gotoContacts}>RENDER CONTACTS</span>
    </div>
  );
}
