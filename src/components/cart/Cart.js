import { CartContext } from "../context/CartContext"
import { useContext } from 'react'


export const Cart = () => {

    const { cart } = useContext(CartContext)
    console.log(cart)

    return (
        <div className='container my-5'>
            <h1>Su Compra</h1>

            {
                cart.map((item) => (
                    <div className='text-start'>
                        <h2>{item.titulo}</h2>
                        <p>Cantidad: {item.info}</p>
                        <p>Cantidad: {item.detalle}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <h5>Precio: ${item.precio}</h5>
                        <hr/>
                    </div>
                ))
            }
        </div>
    )
}
