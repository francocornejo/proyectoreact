import { createContext } from 'react'
import { useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = ( item ) => {
        setCart ( [...cart, item] )
    }

    const removeCart = () => {
        setCart([])
    }

    const delItem = ( id ) => {
        setCart( cart.filter( (prod) => prod.id !== id) )
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const cartCant = () => {
        return cart.reduce ((acu, prod) => acu += prod.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0 )
    }

    return (
        <CartContext.Provider value= {{
            cart,
            addItem,
            isInCart,
            cartCant,
            delItem,
            cartTotal,
            removeCart
          }}>
            {children}
        </CartContext.Provider>
    )
}
