import { AppThunk } from '../store';
import { gotTodos } from '../reducers/Todos';

export const getTodos = (): AppThunk => async dispatch => {
  try {
    const res = await fetch('/todos/');
    loadTodos(res, dispatch);
  } catch(err) {
    console.error(err);
  }
}

export const removeTodo = (index: number): AppThunk => async dispatch => {
  try {
    const res = await fetch('/removetodo/' + index);
    loadTodos(res, dispatch);
  } catch(err) {
    console.error(err);
  }
}

async function loadTodos(res: any, dispatch: any) {
  const response: string[] = await res.json();
  dispatch(gotTodos(response));
}