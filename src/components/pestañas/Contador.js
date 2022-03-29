import React, {useState} from 'react'

const CountButton = () => {
    let [ count, setCount] = useState(0)

    function clickSuma(){
        setCount(count+1)
    }

    function clickResta(){
        if(count === 0){
            setCount(count)
        }else{
            setCount(count-1)
        }
    }

    return (
        <div>
            <button onClick={clickResta}>Quitar</button>
            <p>{count}</p>
            <button onClick={clickSuma}>Agregar</button>
        </div>
    )
}

export default CountButton