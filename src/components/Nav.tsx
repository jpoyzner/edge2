import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { usePrefetchPosts } from '../store/services/Posts';
import './Nav.scss';

export default function() {
  useEffect(() => {
    console.log(window.location.pathname);
  });

  usePrefetchPosts('getPosts', undefined, {});
  let navigate = useNavigate();

  return (
    <div id="jp-nav">
      <div className="tab" onClick={() => navigate('/counter')}>RENDER COUNTER</div>
      <div className="tab" onClick={() => navigate('/logs')}>RENDER LOGS</div>
      <div className="tab" onClick={() => navigate('/posts')}>RENDER POSTS</div>
      <div className="tab" onClick={() => navigate('/todos')}>RENDER TODOS</div>
      <div className="tab" onClick={() => navigate('/contacts')}>RENDER CONTACTS</div>
      <div className="tab" onClick={() => navigate('/hashmaps')}>RENDER HASHMAPS</div>
      <div className="tab" onClick={() => navigate('/grid')}>RENDER GRID</div>
    </div>
  );
}
