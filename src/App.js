import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Cerveza from './components/pestañas/cervezas'
import Hamburguesas from './components/pestañas/hamburguesas'
import ProductCard from './components/pestañas/ProductCard';
import CountButton from './components/pestañas/ProductCard';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <header className="App-header">
          {/* <ProductCard/> */}
      <CountButton/>

      </header>
    </div>
  );
}

export default App;
