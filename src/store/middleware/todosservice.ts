import { PayloadAction } from '@reduxjs/toolkit';
import { gotTodos } from '../reducers/Todos';

export default (store: any) => (next: any) => async (action: PayloadAction<string[]>) => {
  next(action);
  
  try {
    switch (action.type) {
      case 'getTodos': {
        const res = await fetch('/todos/');
        loadTodos(res, next);
        break;
      }
      case 'removeTodo': {
        const res = await fetch('/removetodo/' + action.payload);
        loadTodos(res, next);
        break;
      }
      default:
    }
  } catch (err) {
    console.error(err);
  }
};

async function loadTodos(res: any, next: any) {
  const response: string[] = await res.json();
  next(gotTodos(response));
}