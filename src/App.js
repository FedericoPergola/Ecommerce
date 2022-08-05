import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Detail from './pages/Detail';
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
          <Route path='/productos/:id' element={<Detail/>}/>
          <Route path=''/>
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='*' element={<h1>Error 404</h1>}/>
        </Routes>
        {/* <ItemDetailContainer /> */}
        {/* <section className='IteamListContainer'>
        <IteamListContainer />
        </section> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
