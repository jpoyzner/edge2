import React from 'react';
import { useInput, InputState } from './hooks';
import { useGetLogsMutation } from '../store/services/Logs';

export default function() {
  const [getLogs, logs] = useGetLogsMutation();
  const searchText: InputState = useInput('default text');
  
  React.useEffect(() => {
    getLogs(searchText.value);
  }, [getLogs, searchText.value]);

  React.useEffect(() => {
    document.title = searchText.value;
  });

  return (
    <div id="jp-log-display">
      <input id="jp-search" { ...searchText } />
      <div id="jp-search-echo">ECHO: {searchText.value}</div>
      <div id="jp-logs-container">
        <div className="jp-log">{logs.data}</div>
      </div>
    </div>
  );
}
