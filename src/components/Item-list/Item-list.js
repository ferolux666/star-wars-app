import React from 'react';
import './Item-list.css';

const ItemList = ({renderItem, data, onItemSelected}) => {
    const renderItems = (items) => {
        return items.map( item => {
            const {id} = item;
            const label = renderItem(item)
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    const items = renderItems(data);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    )
}

export default ItemList;
