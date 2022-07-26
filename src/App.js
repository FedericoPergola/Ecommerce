import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import IteamListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <div className='NavBar'>
      <Navbar />
      </div>
      <section className='IteamListContainer'>
      <IteamListContainer />
      </section>
    </div>
  );
}

export default App;
