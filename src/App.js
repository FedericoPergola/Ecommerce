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
      <IteamListContainer title="Mate 1" img="./assests/mate1.jpeg" />
      <IteamListContainer title="Mate 2" img="./assests/mate2.jpeg"/>
      </section>
    </div>
  );
}

export default App;
