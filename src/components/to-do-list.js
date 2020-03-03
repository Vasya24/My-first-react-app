import React from 'react';
import TodoListItem from './to-do-list-item'

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem /></li>
            <li>Построить абсолютно замечательное приложение</li>
        </ul>
    )
};

export default TodoList;