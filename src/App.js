import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemCount />
    <ItemListContainer greeting={"Hola Ricardo"}/>
    </div>
  );
}

export default App;
