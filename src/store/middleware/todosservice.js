export default store => next => async action => {
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
      default: return false;
    }
  } catch (err) {
    console.error(err);
  }
};

async function loadTodos(res, next) {
  const response = await res.json();
  next({type: 'gotTodos', data: response});
}