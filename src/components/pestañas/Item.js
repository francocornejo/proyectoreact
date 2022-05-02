import { Link } from 'react-router-dom'
import React from 'react';

export const Item = ({ item }) => {

  return (
        
    <div className='card my-5 me-1 mb-5 col-3'>
            <img className='card-img-top' src={item.img} alt='Imagen'/>
        <div className='card-body'>
            <h3 className='card-title text-start'>{item.titulo}</h3>
            <p className='card-text text-start'>Precio: ${item.precio}</p>
            <p className='card-text text-start'>Cantidad: {item.cantidad}</p>
            <Link to={`/detail/${item.id}`}><button className='btn btn-primary' variant="primary">Ver más</button></Link>
        </div>
    </div>
  )
};
