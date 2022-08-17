import { gotLogs } from '../reducers/Logs';
import { AppThunk } from '../store';

export const getLogs = (value: string): AppThunk => async dispatch => {
  try {
    const res = await fetch('/logs/' + value);
    const logs = await res.json();
    dispatch(gotLogs(logs));
  } catch(err) {
    console.error(err);
  }
}