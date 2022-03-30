import React, {useState} from 'react'
import Contador from './Contador'

export const ItemDetail = ({id, stock, img, titulo, categoria, detalle, precio, info}) => {

    const [cantidad, setCantidad]= useState(0)

    const handleAgregar = () => {
        const itemToCart = {
            id,
            titulo,
            precio,
            img,
            detalle,
            cantidad,
            info
        }
        console.log(itemToCart)
    }

    return (
        <div className="container my-5 w-25">
            <div className='card'>
                <img src={img} alt={titulo}/>
                    <div className='card-body'>
                        <h2 className='card-title text-start'>{titulo}</h2>
                        <p className='card-text text-start'>{info}</p>
                    </div>
                    <div className='list-group'>
                        <p className='list-group-item'>{detalle}</p>
                        <p>Precio: ${precio}</p>
                    </div>
            </div>
            <Contador 
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}/>
        </div>
    )
}
