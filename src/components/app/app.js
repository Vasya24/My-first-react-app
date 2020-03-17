import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../to-do-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {

  const todoData = [
    { label: 'Выпить кофе', important: false, id: 1 },
    { label: 'Выучить Реакт', important: true, id: 2 },
    { label: 'Построить соврешненно замечательное приложение', important: false, id: 3 }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList 
      todos={todoData}
      onDeleted = {(id) => console.log("Deleted", id)} />
    </div>
  );
};

export default App;
