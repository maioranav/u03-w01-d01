import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <ButtonComponent content="Tasto a caso creato con Funzione" />
          <ButtonComponent content="Un altro Tasto" />
          <ButtonComponent content="Un terzo Tasto" />
        </div>
        <div>
          <ImageComponent src="https://placekitten.com/200" alt="Un bel gattino" />
          <ImageComponent src="https://placedog.net/200/200" alt="Un bel cagnolino" />
        </div>
      </header>
    </div>
  );
}

export default App;
