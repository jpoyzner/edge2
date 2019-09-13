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
      <div className="tab" onClick={gotoCounter}>RENDER COUNTER</div>
      <div className="tab" onClick={gotoLogs}>RENDER LOGS</div>
      <div className="tab" onClick={gotoPosts}>RENDER POSTS</div>
      <div className="tab" onClick={gotoTodos}>RENDER TODOS</div>
      <div className="tab" onClick={gotoContacts}>RENDER CONTACTS</div>
    </div>
  );
}
