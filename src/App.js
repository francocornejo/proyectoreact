import './App.css';
import Navbar from './components/Navbar'
import Contador from './components/pestañas/Contador';
import {ItemListContainer} from './components/pestañas/ItemListContainer'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ItemDetailContainer  from './components/pestañas/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>

        <Routes> 
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>

          <Route path='*' element={ <Navigate to='/'/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
