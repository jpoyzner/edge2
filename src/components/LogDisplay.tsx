import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch, useInput, InputState } from './hooks';

export default function() {
  const logs = useAppSelector((state) => state.logs.value);
  const dispatch = useAppDispatch();
  const searchText: InputState = useInput('default text', (e) => dispatch({ type: 'GETLOGS', payload: e.target.value }));
  useDocumentTitle(searchText.value);

  return (
    <div id="jp-log-display">
      <input id="jp-search" { ...searchText } />
      <div id="jp-search-echo">ECHO: {searchText.value}</div>
      <div id="jp-logs-container">
        <div className="jp-log">{logs}</div>
      </div>
    </div>
  );
}

function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  });
}
