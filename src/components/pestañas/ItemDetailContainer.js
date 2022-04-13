import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { PedirDatos } from '../helpers/PedirDatos'
import { ItemDetail } from './ItemDetail'
import { db } from '../../firebase/config'
import { doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log(itemId)

    useEffect( ()=> {
        setLoading(true)

        const docRef =  doc(db, 'productos', itemId)
        getDoc(docRef)
        .then( doc => {
            const prod = {id: doc.id, ...doc.data()}
            setItem(prod)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <div>
            {
                loading
                ? <h2>Cargando...</h2>
                :
                <ItemDetail {...item}/>
            }
        </div>
    )
}

export default ItemDetailContainer
