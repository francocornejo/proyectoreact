import { CartContext } from "../context/CartContext"
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'

export const Cart = () => {

    const { cart, delItem, cartTotal, removeItem } = useContext(CartContext)
    console.log(cart)

    return (
        <div className='container my-5'>
            
            {
                cart.length === 0 ?
                <div>
                    <h2>Tu carrito esta vacío</h2>
                    <hr/>
                    <p>Para hacer tu compra, volvé al menu de Inicio</p>
                    <Link to='/' className='btn btn-secondary'>Volver</Link>
                </div>
                :
            <>
                <h1>Su Compra</h1>
                { 
                cart.length === 0
                ?
                    <div>
                        <h2>Su carrito se encuentra Vacío</h2>
                        <Link to='/' className='btn btn-toolbar'>Volver</Link>

                    </div>
                :
                    cart.map((item) => (
                        <div className='text-start' key={item.id}>
                            <h2>{item.titulo}</h2>
                            <p>Cantidad: {item.info}</p>
                            <p>Cantidad: {item.detalle}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <h5>Precio: ${item.precio * item.cantidad}</h5>
                            <div className='text-end'>
                                <button onClick={() => delItem(item.id)} className='btn btn-danger'><BsFillTrashFill/></button>
                            </div>
                            <hr/>
                        </div>
                    ))
                }
                <h3 className='text-start my-3'>Total: ${ cartTotal() }</h3>
                <Link to='/' className='btn btn-secondary btn-sm'>Seguir Comprando</Link>
                <Link to='/checkout' className='btn btn-primary btn-sm mx-3'>Finalizar Compra</Link>
            </>
            }
        </div>
    )
}
