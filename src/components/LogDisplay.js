import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useInput } from '../utils/hooks';

function LogDisplay(props) {
  const searchText = useInput('default text', (e) => props.getLogs(e.target.value));
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

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

export default connect(
  (state) => ({ logs: state.get('logs') || '' }),
  (dispatch) => ({
    getLogs(query) {
      dispatch( {type: 'GETLOGS', query });
    },
  }),
)(LogDisplay);
