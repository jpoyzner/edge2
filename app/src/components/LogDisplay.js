import React from 'react';
import Store from '../store/store';

function search(event) {
  Store.dispatch({type: 'GETLOGS', query: event.target.value});
}

export default () => {
  const logs = Store.getState().logs || [];

  return (
    <div id="jp-log-display">
      <input id="jp-search" onInput={search} />
      <div id="jp-logs-container">
        {logs.map((log, index) => <div key={index} className="jp-log">{log.logLine}</div>)}
      </div>
    </div>
  );
}
