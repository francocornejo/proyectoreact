import { CartContext } from "../context/CartContext"
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'
import Swal from 'sweetalert2'

export const Cart = () => {

    const { cart, delItem, cartTotal, removeItem } = useContext(CartContext)
    console.log(cart)

      const dispararSwal = (i) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })

        swalWithBootstrapButtons.fire({
            title: 'Estas seguro?',
            text: "Estas por eliminar esta cerveza del carrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, borrar',
            cancelButtonText: 'No, mejor no',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                delItem(i.id)
                swalWithBootstrapButtons.fire(
                    'Eliminado',
                    'Tu cerveza se ha eliminado',
                    'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
            swalWithBootstrapButtons.fire(
                'Cancelar',
                'Tu cerveza esta a salvo!',
                'error'
            )
            }
        })
      }
      
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
                    cart.map((item) => (
                        <div className='text-start' key={item.id}>
                            <h2>{item.titulo}</h2>
                            <p>Informacion: <b>{item.info}</b></p>
                            <p>Detalle: <b>{item.detalle}</b></p>
                            <p>Cantidad de pintas: <b>{item.cantidad}</b></p>
                            <h5>Precio: <b>${item.precio * item.cantidad}</b></h5>
                            <div className='text-end'>
                                <button onClick={() => dispararSwal(item)} className='btn btn-danger'><BsFillTrashFill/></button>
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
