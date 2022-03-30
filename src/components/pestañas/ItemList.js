import React from 'react';
import { Item } from './Item';

export const ItemList = ({ items }) => {
  
  return (
    <div className='container'>
      <div className='row justify-content-evenly'>
      {items.map((item) => (
        
        <Item item={item} />
      ))}
      </div>
    </div>
  );
};