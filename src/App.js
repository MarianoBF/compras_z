import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetails/ItemDetailsContainer";
import {BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  // const [showDetails, setShowDetails] = useState(false);
  // const [itemDetails, setItemDetails] = useState(false);

  // const handleShowDetails = item => {
  //   setItemDetails(item);
  //   setShowDetails(true);
  // };

  // const handleCloseDetails = () => {
  //   setShowDetails(false);
  // };

  return (
    <BrowserRouter>
      <NavBar />

    <Switch> 
    <Route exact path="/category/:id_category"><ItemListContainer greeting={"Hola Ricardo"}/></Route>
    <Route path="/item/:id_product"><ItemDetailsContainer /></Route>
    <Route path="/"><ItemListContainer greeting={"Hola Ricardo"}/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;