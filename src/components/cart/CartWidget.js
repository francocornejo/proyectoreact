import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { CartContext } from '../context/CartContext';
import { useContext } from 'react'

export const CartWidget = () => {

    const { cartCant } = useContext(CartContext)

    return (
        <Link to={'/cart'} className='widget d-flex'>
            <BsCart3/>
            <span>{cartCant()}</span>
        </Link>
            
        
        
        
    )
}
