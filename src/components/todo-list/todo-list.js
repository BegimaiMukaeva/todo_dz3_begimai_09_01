import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {

  // Array generation
  const content = todos.map((todo) => {
    // todo -> id, label, important, done

    return (
      <li key={todo} className="list-group-item">
        <TodoListItem {...todo} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { content }
    </ul>
  );
};


export default TodoList;
