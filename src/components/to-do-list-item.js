import React from 'react';
import './to-do-list-item.css';

const TodoListItem = ({label, important = false}) => {

    const style = {
        color: important ? 'tomato' : 'black'
    };

    return (
    <span className="to-do-list-item" 
    style={style}>{label}</span>
    );
};

export default TodoListItem;