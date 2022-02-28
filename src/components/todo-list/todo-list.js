import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ onDelete, onImportant, todos, onDone }) => {

  const content = todos.map((todo) => {
    // todo -> id, label, important, done

    return (
      <li key={todo} className="list-group-item">
        <TodoListItem onImportant = {onImportant} onDelete = {onDelete} onDone={onDone} {...todo} />
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
