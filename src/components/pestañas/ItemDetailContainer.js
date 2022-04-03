import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { PedirDatos } from '../helpers/PedirDatos'
import { ItemDetail } from './ItemDetail'


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log(itemId)

    useEffect( ()=> {
        setLoading(true)

        PedirDatos().then((res) => {

            setItem(res.find((prod) => prod.id === Number(itemId)) )
            
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
