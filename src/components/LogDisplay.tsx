import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { useInput, InputState } from './hooks';

interface StateProps {
  logs: string;
}

interface DispatchProps {
  getLogs(query: string): void;
}

type Props = StateProps & DispatchProps;

const LogDisplay: FunctionComponent<Props> = (props) => {
  const searchText: InputState = useInput('default text', (e) => props.getLogs(e.target.value));
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

function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  });
}

export default connect(
  (state: Map<string, any>): StateProps => ({
    logs: state.get('logs') || '',
  }),
  (dispatch): DispatchProps => ({
    getLogs(query: string) {
      dispatch({ type: 'GETLOGS', data: query });
    },
  }),
)(LogDisplay);
