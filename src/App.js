import './App.css';
import Navbar from './components/Navbar'
import {ItemListContainer} from './components/pestañas/ItemListContainer'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ItemDetailContainer  from './components/pestañas/ItemDetailContainer'
import { CartContext} from './components/context/CartContext';
import { Cart } from './components/cart/Cart';
import { CartProvider } from './components/context/CartContext'

function App() {

  


  return (
    
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar/>

          <Routes> 
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
            <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>

            <Route path='*' element={ <Navigate to='/'/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
      
  );
}

export default App;
