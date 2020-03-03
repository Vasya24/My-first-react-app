import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/to-do-list';


const App = () => {

    const todoData = [
        {label: 'Выпить кофе', important: false},
        {label: 'Построить совершенно замечательное приложение', important: true},
        {label: 'Поесть', important: false},
    ];

    return (    
    <div>
    <AppHeader />
    <SearchPanel />
    <TodoList todos = {todoData}/>
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))