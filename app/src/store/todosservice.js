export default store => next => action => {
  next(action);
  switch (action.type) {
    case 'getTodos':
      fetch('/todos/')
        .then((res) => res.json())
        .then((response) => {
          //console.log('Success:', JSON.stringify(response));
          next({type: 'gotTodos', data: response});
        })
        .catch((error) => console.error('Error:', error));        

      break;
    case 'removeTodo':
    fetch('/removetodo/' + action.data)
      .then((res) => res.json())
      .then((response) => {
        //console.log('Success:', JSON.stringify(response));
        next({type: 'gotTodos', data: response});
      })
      .catch((error) => console.error('Error:', error));        

      break;
    default: return false;
  }
};