import React, { useState } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import Store from '../store/store';
import './Todos.scss';

function Posts(props) {
  const todos = useTodos(props.todos);

  return (
    <div id="todo-page">
      {todos.value.length ?
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

function useTodos(todos) {
  if (!todos.length) {
    Store.dispatch({type: 'getTodos'});
  }

  return {
    value: todos,
    remove(index) {
      Store.dispatch({type: 'removeTodo', data: index});
    },
  }
}

export default connect((state) => ({
  todos: state.todos,
}))(Posts);
