import './App.css';
import NavBar from "./components/Navigation/NavBar"
import ItemListContainer from "./components/ItemList/ItemListContainer"

function App() {


  return (
    <div className="App">
    <NavBar />
    <ItemListContainer greeting={"Hola Ricardo"}/>
    </div>
  );
}

export default App;
