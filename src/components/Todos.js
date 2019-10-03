import React from 'react';
import { connect } from 'react-redux';
import './Todos.scss';

function Posts(props) {
  const todos = useTodos(props.todos, props);

  return (
    <div id="todo-page">
      {todos.value.size ?
        todos.value.map((todo, index) => {
          return (
            <div className="todo-item" key={index} onClick={todos.remove.bind(this, index)}>
              <span>{todo}</span>
            </div>
          );
        })
        : "LOADING..."
      }
    </div>
  );
}

function useTodos(todos, props) {
  if (!todos.size) {
    props.getTodos();
  }

  return {
    value: todos,
    remove(index) {
      props.removeTodo(index);
    },
  }
}

export default connect(
  (state) => ({ todos: state.get('todos') }),
  (dispatch) => ({
    getTodos() {
      dispatch({ type: 'getTodos' });
    },
    removeTodo(index) {
      dispatch({ type: 'removeTodo', data: index });
    },
  }),
)(Posts);
