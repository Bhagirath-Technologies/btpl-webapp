import React from 'react';

// Define the ListItem component
const ListItem = ({ IndustryList }) => {
    return (
        <>
            {IndustryList.map((listItem) => (
                <li className="list-group-item fs-4 cursor_pointer" key={listItem.id}>
                    <i className={listItem.style}></i>
                    {listItem.title}
                    <hr/>
                </li>
            ))}
        </>
    );
};

export default ListItem;
