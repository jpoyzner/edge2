import React from 'react';
import { useGetAllTodosQuery, useRemoveTodoMutation } from '../store/services/Todos';
import './Todos.scss';

export default function() {
  const todos: TodosState = useTodos();

  React.useEffect(() => {
    if (todos.error) {
      console.log(todos.error);
    }
  }, [todos.error]);

  return (
    <div id="todo-page">
      {!todos.error && todos.value && todos.value.length ?
        todos.value.map((todo: string, index: number) => {
          return (
            <div className="todo-item" key={index} onClick={() => todos.remove(index)}>
              <span>{todo}</span>
            </div>
          );
        })
        : (todos.error && `${todos.error.status} ${JSON.stringify(todos.error.data)}`) || "NO TODOS FOUND"
      }
    </div>
  );
}

interface TodosState {
  value: string[] | undefined;
  remove(index: number): void;
  error: any;
}

function useTodos(): TodosState {
  const { data: initialTodos, error } = useGetAllTodosQuery();
  const [removeTodo, updatedTodos] = useRemoveTodoMutation();

  return {
    value: updatedTodos.data || initialTodos,
    remove(index) {
      removeTodo(index);
    },
    error,
  }
}