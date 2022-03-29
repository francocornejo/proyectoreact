import './App.css';
import Navbar from './components/Navbar'
import Contador from './components/pestañas/Contador';
import {ItemListContainer} from './components/pestañas/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar/>

      <header className="App-header">
      <Contador/>
      <ItemListContainer/>
      
    
      </header>
    </div>
  );
}

export default App;
