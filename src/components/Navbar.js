import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to={`/`} className="navbar-brand" href="#">Cerveceria</Link>
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
            </div>
        </nav>
    )
}

function ItemListContainer(){
    //funcion vacia para la tarea
}

export default Navbar