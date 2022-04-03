import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Prod } from '../utils/Prod'
import {ItemList} from './ItemList'


export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const {categoriaId} = useParams()

  useEffect(() => {
    
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve( Prod );
      }, 2000);
    });

    getItems.then((res) => {
      
      if(categoriaId){
        setItems( res.filter( (prod) => prod.categoria === categoriaId ) )
      }else{
      setItems( res );
    }
    });
  }, [categoriaId]);

  // el contenedor llama al componente presentacion ItemList
  return <ItemList items={items} />;
};