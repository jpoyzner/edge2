import Store from './store';
import React, {Component} from 'react';

export default class Counter extends Component {
    render() {
        const logs = Store.getState().logs || [];

        return (
            <div id="jp-log-display">
                <input id="jp-search" onInput={this.search} />
                <div id="jp-logs-container">
                    {logs.map((log, index) => <div key={index} className="jp-log">{log.logLine}</div>)}
                </div>
            </div>
        )
    }

    search(event) {
        Store.dispatch({type: 'GETLOGS', query: event.target.value});
    }
}
