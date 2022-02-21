import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';


const App = () => {

  const todos = [
    { id: 1, label: 'Drink Coffee', important: false, done: false },
    { id: 1, label: 'Drink tea', important: false, done: false },
    { id: 1, label: 'Drink vodka', important: false, done: false },
  ]

  return (
    <div className="todo-app">

      // Header
      <AppHeader toDo={1} done={3} />

      // Top panel
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      // Todo List
      <TodoList todos={todos} />

    </div>
  );
};

export default App;
