import React, {useState} from 'react'
import { CartContext } from '../context/CartContext'
import Contador from './Contador'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({id, stock, img, titulo, categoria, detalle, precio, info}) => {

    const {addItem, isInCart} = useContext( CartContext )

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
        addItem(itemToCart)
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

            {
                !isInCart(id)
                ?
                <Contador 
                cantidad={cantidad}
                setCantidad={setCantidad}
                onAdd={handleAgregar}/>
                :
                <Link to='/cart' className='btn btn-success d-block'>Finalizar Compra</Link>
            }
            <Link to='/' className='btn btn-secondary'>Volver</Link>
        </div>
    )
}
