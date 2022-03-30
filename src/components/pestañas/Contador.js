import React, {useState} from 'react'

const Contador = ({ cantidad, setCantidad, handleAgregar}) => {

    function clickSuma(){
        setCantidad(cantidad + 1)
    }

    function clickResta(){
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div>
            <button className="btn btn-outline-primary" onClick={clickResta}>-</button>
            <span className="mx-3">{cantidad}</span>
            <button className="btn btn-primary" onClick={clickSuma}>+</button>
            <br/>
            <button className="btn btn-success my-2" onClick={handleAgregar}>Agregar</button>
        </div>
    )
}

export default Contador