import React from 'react';

export const Item = ({ item }) => {
  // aca mostrarian todas las partes del item/producto en cuestion, dandole estilo
  return (
    <div className='card-deck'>
        <div className='card text-white bg-primary mb-3' style={{width:'14rem'}}>
            <div className='card-header'>
                <h3>{item.titulo}</h3>
            </div>
            <div className='card-body' style={{padding:'3rem'}}>
                <img src='' alt='Imagen'/>
            </div>
            <div className='card-footer'>
                <p className='card-text'>Precio: ${item.precio}</p>
                <p className='card-text'>Cantidad: {item.cantidad}</p>
            </div>
        </div>
    </div>
  )
};
