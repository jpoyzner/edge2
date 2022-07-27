import React from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import './Todos.scss';

export default function() {
  const appTodos: string[] = useAppSelector((state) => state.todos.value);
  const todos: TodosState = useTodos(appTodos);

  return (
    <div id="todo-page">
      {todos.value.length ?
        todos.value.map((todo: string, index: number) => {
          return (
            <div className="todo-item" key={index} onClick={todos.remove.bind(null, index)}>
              <span>{todo}</span>
            </div>
          );
        })
        : "LOADING..."
      }
    </div>
  );
}

interface TodosState {
  value: string[];
  remove(index: number): void;
}

function useTodos(todos: string[]): TodosState {
  const dispatch = useAppDispatch();

  if (!todos.length) {
    dispatch({ type: 'getTodos' });
  }

  return {
    value: todos,
    remove(index) {
      dispatch({ type: 'removeTodo', payload: index });
    },
  }
}