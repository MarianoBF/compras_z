import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetails/ItemDetailsContainer";
import CartContainer from "./components/Cart/CartContainer";
import {HashRouter, Switch, Route} from "react-router-dom";
import {CartProvider} from "./context/CartContext";

function App() {

  return (
    <CartProvider>
      <HashRouter>
        <NavBar />
        <Switch>
          <Route exact path="/category/:id_category">
            <ItemListContainer greeting={"Hola Ricardo"} />
          </Route>
          <Route exact path="/item/:id_product">
            <ItemDetailsContainer />
          </Route>
          <Route exact path="/cart">
            <CartContainer />
          </Route>
          <Route path="/">
            <ItemListContainer greeting={"Hola Ricardo"} />
          </Route>
        </Switch>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
