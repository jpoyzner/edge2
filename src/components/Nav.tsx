import React, { FunctionComponent } from 'react';
import { History } from 'history';
import './Nav.scss';

interface Props {
  history: History;
}

const Nav: FunctionComponent<Props> = ({ history }) => {
  function gotoCounter() {
    history.push('/counter');
  }

  function gotoLogs() {
    history.push('/logs');
  }

  function gotoPosts() {
    history.push('/posts');
  }

  function gotoTodos() {
    history.push('/todos');
  }

  function gotoContacts() {
    history.push('/contacts');
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

export default Nav;
