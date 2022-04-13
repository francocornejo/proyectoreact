import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Prod } from '../utils/Prod'
import {ItemList} from './ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'


export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const {categoriaId} = useParams()

  useEffect(() => {
    //-1 armar la refenrcia
    const productosRef = collection(db, "productos")
    const q = categoriaId ? query(productosRef, where('categoria', '==', categoriaId)) : productosRef


    //-2 llamar (async) a esa referencia ( promesa)
    getDocs(q)
    .then(resp => {
      const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
      console.log(items)
      setItems(items)
    })
  }, [categoriaId]);

  // el contenedor llama al componente presentacion ItemList
  return <ItemList items={items} />;
};