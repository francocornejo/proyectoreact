import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap';

/* const ProductCard  = () => {
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Hamburguesa</Card.Title>
            <Card.Text>
                Hamburguesa Clasica Doble
            </Card.Text>
            <Button variant="primary">Agregar</Button>
        </Card.Body>
        </Card>
} */

const CountButton = () => {
    let [ count, setCount] = useState(0)

    function click(){
        setCount(count+1)
    }

    return (
        <div>
            <button onClick={click}>Agregar</button>
            <p>Usted hizo: {count} clicks</p>
        </div>
    )
}

//export default ProductCard
export default CountButton