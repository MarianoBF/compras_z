import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetails/ItemDetailsContainer";
import CartContainer from "./components/Cart/CartContainer";
import {BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

    <Switch> 
    <Route exact path="/category/:id_category"><ItemListContainer greeting={"Hola Ricardo"}/></Route>
    <Route exact path="/item/:id_product"><ItemDetailsContainer /></Route>
    <Route exact path="/cart"><CartContainer /></Route>
    <Route path="/"><ItemListContainer greeting={"Hola Ricardo"}/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;