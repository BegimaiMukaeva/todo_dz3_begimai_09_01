import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import TodoAdd from "../todo-add";
import './app.css';


class App extends React.Component {
    state = {
        todos: [
             { id: 1, label: 'Drink Coffee', important: false, done: false },
             { id: 2, label: 'Drink tea', important: false, done: false },
             { id: 3, label: 'Drink vodka', important: false, done: false },
             { id: 4, label: 'Drink water', important: false, done: false },
             { id: 5, label: 'Read', important: false, done: false },
        ],
        filter: 'all',
        searchString: "",
    }

    onDelete = (id) => {
      this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id === id)

       const prev = oldState.todos.slice(0, idx)
       const next = oldState.todos.slice(idx + 1)

      return{
          todos: [...prev, ...next]
           }
        })
    }


     onImportant = (id) => {
      this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id === id)

       const prev = oldState.todos.slice(0, idx)
       const current = oldState.todos[idx]
       const next = oldState.todos.slice(idx + 1)

      return{
          todos: [
              ...prev,
              {...current, important: !current.important},
              ...next
             ]
           }
        })
    }

        onDone = (doneId) => {
        this.setState((oldState) => {
            const idx = oldState.todos.findIndex((item) => item.id === doneId)
            const prev = oldState.todos.slice(0, idx)
            const current = oldState.todos[idx]
            const next = oldState.todos.slice(idx + 1)

            return {
                todos:
                    [...prev,
                        {...current, done: !current.done},
                        ...next]
            }
        })
    }

    onToggleFilter = (status) => {
        this.setState({
          filter: status,
        });
      };


     onStatusFilter = (todos, status) => {
    if (status === "active") {
      return todos.filter((item) => item.done === false);
    } else if (status === "done") {
      return todos.filter((item) => item.done === true);
    } else {
      return todos;
    }
  };

      onSearchFilter = (todos, searchString) => {
        const result = todos.filter((todo) =>
          todo.label.toLowerCase().includes(searchString.toLowerCase())
        );
        return result;
      };

      onSearchChange = (searchString) => {
        this.setState({
          searchString: searchString,
        });
      };

    addNewTodo = (labelText) => {
        this.setState((oldState) => {
            let itemsId = oldState.todos.map(item => item.id)
            if (itemsId.length === 0) {
                itemsId = []
            }
           let newId = itemsId.length + 1
            const newTodo = {
                id: newId + 1,
                label: labelText,
                important: false,
                done: false
            }
            return {todos: [...oldState.todos, newTodo]}
        })
    }

    render () {
      const filteredTodos = this.onStatusFilter(this.state.todos, this.state.filter)
      const filteredBySearchTodos = this.onSearchFilter(filteredTodos,this.state.searchString)

      const doneTodo = this.state.todos.filter((obj) => {
        return obj.done === true;
      });
      const todo = this.state.todos.filter((obj) => {
        return obj.done === false;
      });

      return (
        <div className="todo-app">
          <AppHeader toDo={todo.length} done={doneTodo.length} />
          <div className="top-panel d-flex">
            <SearchPanel
               onSearchChange={this.onSearchChange}
               onSearchFilter={this.onSearchFilter}/>
            <ItemStatusFilter filter={this.state.filter} onToggleFilter={this.onToggleFilter} />
          </div>
           <TodoAdd addNewTodo={this.addNewTodo} />
          <TodoList
              onDelete = {this.onDelete}
              onImportant={this.onImportant}
              onDone={this.onDone}
              todos={filteredBySearchTodos}
          />

        </div>
        );
    }
};

export default App;
