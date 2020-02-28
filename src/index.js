import React from 'react';
import ReactDOM from 'react-dom';
const TodoList = () => {
    const items = ['Выучить React', 'Написать совершенно замечательное приложение']
    return ( 
        <ul>
        <li> {items[0]} </li>  
        <li> {items[1]} </li>  
        </ul>
    );
};

const AppHeader = () => {
    return <h1>Мой ToDo-лист</h1>
}

const App = () => {

    const loginBox = <span>Пожалуйста, залогиньтесь</span>

    return (    
    <div>
    {loginBox}
    <AppHeader />
    <SearchPanel />
    <TodoList />
    </div>
    )
}

const SearchPanel = () => {
    return <input placeholder = "Search..." />;
};

ReactDOM.render(<App />, document.getElementById('root'))