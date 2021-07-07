import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetails/ItemDetailsContainer";
import CartContainer from "./components/Cart/CartContainer";
import ErrorComponent from "./components/ErrorComponent";
import {HashRouter, Switch, Route} from "react-router-dom";
import {CartProvider} from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import {useState} from "react";
import {loginWithGoogle, logoutFromGoogle} from "./firebase";

function App() {
  const [user, setUser] = useState({});

  const login = () => {
    loginWithGoogle()
      .then(loginData => {
        setUser({
          name: loginData.displayName,
          email: loginData.email,
          uid: loginData.uid,
        });
      })
      .catch(error => console.log("Unable to login", error));
  };

  const logout = () => {
    try {
      logoutFromGoogle();
      setUser({});
    } catch {
      console.log("Unable to logout");
    }
  };

  return (
    <ProductsProvider>
      <CartProvider>
        <HashRouter>
          <NavBar login={login} logout={logout} user={user} />
          <Switch>
            <Route exact path="/category/:id_category">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:id_product">
              <ItemDetailsContainer />
            </Route>
            <Route exact path="/cart">
              <CartContainer user={user} />
            </Route>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route>
              <ErrorComponent />
            </Route>
          </Switch>
        </HashRouter>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
