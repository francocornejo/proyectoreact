import { useState, useContext } from 'react'
import { CartContext } from "../context/CartContext"
import { db } from '../../firebase/config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'


export const Checkout = () => {

    const {cart, cartTotal} = useContext(CartContext)
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: '',
        dir: ''
    })

    const handleInputChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    

    const handleSubmit = (e) => {

        e.preventDefault()
        const orden = {
            items: cart,
            total: cartTotal(),
            comprador: {...values},
            fechaHora: Timestamp.fromDate(new Date())
        }

        const ordersRef = collection(db, 'orders')

        addDoc(ordersRef, orden)
            .then((res) => {
                console.log(res.id)
            })
}

    return (

        <div className='container my-5'>
            <h2>Datos del comprador</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    className='form-control my-2'
                    type={'text'}
                    placeholder='Nombre'
                    value={values.nombre}
                    onChange={handleInputChange}
                    name="nombre"
                />

                <input
                className='form-control my-2'
                type={'email'}
                value={values.email}
                onChange={handleInputChange}
                name="email"
                />

                <input
                className='form-control my-2'
                type={'text'}
                value={values.tel}
                onChange={handleInputChange}
                name="tel"
                />

                <button className='btn btn-primary' type='submit' >Enviar</button>
            </form>
        </div>
    )
}
