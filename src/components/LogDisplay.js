import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function LogDisplay(props) {
  const searchText = useSearchInput('default text', props);
  useDocumentTitle(searchText.value);

  return (
    <div id="jp-log-display">
      <input id="jp-search" { ...searchText } />
      <div id="jp-search-echo">ECHO: {searchText.value}</div>
      <div id="jp-logs-container">
        <div className="jp-log">{props.logs}</div>
      </div>
    </div>
  );
}

function useSearchInput(initialValue, props) {
  const [value, setValue] = useState(initialValue);
  
  return {
    value,
    onChange: (e) => {
      const { value } = e.target;
      setValue(value);
      props.getLogs(value);
    },
  }
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

export default connect(
  (state) => ({ logs: state.logs || '' }),
  (dispatch) => ({
    getLogs(query) {
      dispatch( {type: 'GETLOGS', query });
    },
  }),
)(LogDisplay);
