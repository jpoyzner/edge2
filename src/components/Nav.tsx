import React from 'react';
import { History } from 'history';
import { usePrefetchPosts } from '../store/services/Posts';
import './Nav.scss';

interface Props {
  history: History;
}

export default function({ history }: Props) {
  usePrefetchPosts('getPosts', undefined, {});

  return (
    <div id="jp-nav">
      <div className="tab" onClick={() => history.push('/counter')}>RENDER COUNTER</div>
      <div className="tab" onClick={() => history.push('/logs')}>RENDER LOGS</div>
      <div className="tab" onClick={() => history.push('/posts')}>RENDER POSTS</div>
      <div className="tab" onClick={() => history.push('/todos')}>RENDER TODOS</div>
      <div className="tab" onClick={() => history.push('/contacts')}>RENDER CONTACTS</div>
      <div className="tab" onClick={() => history.push('/hashmaps')}>RENDER HASHMAPS</div>
      <div className="tab" onClick={() => history.push('/grid')}>RENDER GRID</div>
    </div>
  );
}
