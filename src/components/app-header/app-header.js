import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Мой To-do лист</h1>
      <h2>{toDo} осталось, {done} готово</h2>
    </div>
  );
};

export default AppHeader;
