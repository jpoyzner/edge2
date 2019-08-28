import React, { useState, useEffect } from 'react';
import Store from '../store/store';

export default () => {
  const searchText = useSearchInput('default text');
  const logs = Store.getState().logs || '';
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

function useSearchInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  return {
    value,
    onChange: (e) => {
      const { value } = e.target;
      setValue(value);
      Store.dispatch({type: 'GETLOGS', query: value});
    },
  }
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}
