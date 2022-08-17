import React from 'react';
import { useAppSelector, useAppDispatch, useInput, InputState } from './hooks';
import { getLogs } from '../store/middleware/LogActions';

export default function() {
  const logs = useAppSelector((state) => state.logs.value);
  const dispatch = useAppDispatch();
  
  const searchText: InputState =
    useInput('default text', (e) => dispatch(getLogs(e.target.value)));
  
  React.useEffect(() => {
    document.title = searchText.value;
  });

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
