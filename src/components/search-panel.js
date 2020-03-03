import React from 'react';

const SearchPanel = () => {
    const searchText = 'Поиск...';
    const searchStyle = {
        fontSize: "20px"
    };
    return <input
    style = {searchStyle}
    placeholder = {searchText} />;
};

export default SearchPanel;