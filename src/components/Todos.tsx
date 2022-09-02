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
            <div className={`todo-item ${todos.isFetching ? 'todo-fetching' : ''}`} key={index} onClick={() => todos.remove(index)}>
              <span>{todo}</span>
            </div>
          );
        })
        : (todos.error && `${todos.error.status} ${JSON.stringify(todos.error.data)}`) || "NO TODOS FOUND"
      }
      <button onClick={todos.refetch}>ATTEMPT REFETCH</button>
    </div>
  );
}

interface TodosState {
  value: string[] | undefined;
  remove(index: number): void;
  error: any;
  isFetching: boolean;
  refetch: any;
}

function useTodos(): TodosState {
  const { data: initialTodos, isFetching, refetch, error } =
    useGetAllTodosQuery(null, { pollingInterval: 5000 });
  
  const [removeTodo, updatedTodos] = useRemoveTodoMutation();

  return {
    value: updatedTodos.data || initialTodos,
    remove(index) {
      removeTodo(index);
    },
    isFetching,
    refetch,
    error,
  }
}