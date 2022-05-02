import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from './cart/CartWidget'
import wolf from './utils/imagesUtils/wolf1.png'
import '../components/pestañas/styles.css'
import {Animated} from "react-animated-css"

const Navbar = () => {
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <h4 className='mx-3 text-primary'>Cerveceria Wolf</h4>
                <Animated animationIn="zoomInDown" isVisible={true}>
                        <img className='logo mx-5' src={wolf}/>
                </Animated>
                </div>
                
                <div className="d-flex">
                    <Link to={`/`} className="navbar-brand" href="#">Inicio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to={`/categoria/rubias`} className="nav-link active" aria-current="page" href="#">Rubias</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={`/categoria/negras`} className="nav-link" href="#">Negras</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={`/categoria/rojas`} className="nav-link" href="#">Rojas</Link>
                            </li>
                        </ul>
                    </div> 
                <CartWidget/>
                </div>
            </nav>
        </header>
    )
}

function ItemListContainer(){
    //funcion vacia para la tarea
}

export default Navbar