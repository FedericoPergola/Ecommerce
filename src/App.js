import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import IteamListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter ,Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div className='NavBar'>
      <Navbar />
      </div>
      <ItemDetailContainer />
      {/* <section className='IteamListContainer'>
      <IteamListContainer />
      </section> */}
    </div>
  );
}

export default App;
