import { CartContext } from "../context/CartContext"
import { db } from '../../firebase/config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'


export const Checkout = () => {

    const {cart, cartTotal} = useContext(CartContext)
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: ''
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

        console.log(orden)

}

    return (

        <div className='container my-5'>
            <h2>Datos del comprador</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    className='container my-5'
                    type={'text'}
                    placeholder='Nombre'
                />

                <input
                className='container my-5'
                type={'email'}
                />

                <input
                className='container my-5'
                type={'text'}
                />

                <button className='btn btn-primary' type='submit' >Enviar</button>
            </form>
        </div>
    )
}
