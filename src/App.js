import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import IteamListContainer from './components/ItemListContainer/ItemListContainer';
import CartProvider from './context/CartContext';
import CartList from './components/CartList/CartList';
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import About from './pages/About';



function App() {
  return (
    <CartProvider>
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
            <Route path='/about' element={<About />}/>
            <Route path='/cart' element={<CartList />}/>
            <Route path='*' element={<h1>Error 404</h1>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
