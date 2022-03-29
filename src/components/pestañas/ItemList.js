import React from 'react';
import { Item } from './Item';

export const ItemList = ({ items }) => {
  
  return (
    <div className='card-deck'>
      {items.map((item) => (
        
        <Item item={item} />
      ))}
    </div>
  );
};