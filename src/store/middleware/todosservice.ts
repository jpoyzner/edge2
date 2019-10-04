import { Action } from '../../types';

export default (store: any) => (next: any) => async (action: Action) => {
  next(action);
  
  try {
    switch (action.type) {
      case 'getTodos': {
        const res = await fetch('/todos/');
        loadTodos(res, next);
        break;
      }
      case 'removeTodo': {
        const res = await fetch('/removetodo/' + action.data);
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
  next({type: 'gotTodos', data: response});
}