import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { CartContext } from '../context/CartContext';
import { useContext } from 'react'

export const CartWidget = () => {

    const { cartCant } = useContext(CartContext)

    return (
        <div className='d-flex align-items-center mx-2'>
            <Link to={'/cart'} className='widget d-flex mx-1'>
                <BsCart3/>
            </Link>
                <span>{cartCant()}</span>
        </div>
            
        
        
        
    )
}
