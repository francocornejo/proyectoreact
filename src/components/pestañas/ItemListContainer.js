import React, {useState, useEffect} from 'react'
import { Prod } from '../utils/Prod'
import {ItemList} from './ItemList'

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

  useEffect(() => {
    
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Prod);
      }, 2000);
    });

    getItems.then((res) => {
      setItems(res);
    });
  }, []);

  // el contenedor llama al componente presentacion ItemList
  return <ItemList items={items} />;
};