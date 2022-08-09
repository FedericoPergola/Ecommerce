import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import IteamListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter ,Routes, Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='NavBar'>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Home />}/>
          <Route path='/products/:id' element={<Detail/>}/>
          <Route path='/category/:category' element={<IteamListContainer/>}/>
          <Route path='/contact' element={<Contacto />}/>
          <Route path='/cart' element={<Checkout />}/>
          <Route path='*' element={<h1>Error 404</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
