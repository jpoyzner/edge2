import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import './Todos.scss';

interface StateProps {
  todos: List<string>;
}

interface DispatchProps {
  getTodos(): void;
  removeTodo(index: number): void;
}

type Props = StateProps & DispatchProps;

const Todos: FunctionComponent<Props> = (props) => {
  const todos: TodosState = useTodos(props.todos, props);

  return (
    <div id="todo-page">
      {todos.value.size ?
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
  value: List<string>;
  remove(index: number): void;
}

function useTodos(todos: List<string>, props: DispatchProps): TodosState {
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
  (state: Map<string, any>): StateProps => ({
    todos: state.get('todos'),
  }),
  (dispatch): DispatchProps => ({
    getTodos() {
      dispatch({ type: 'getTodos' });
    },
    removeTodo(index: number) {
      dispatch({ type: 'removeTodo', data: index });
    },
  }),
)(Todos);
