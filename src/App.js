import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetails/ItemDetailsContainer";
import CartContainer from "./components/Cart/CartContainer";
import OrdersContainer from "./components/Orders/OrdersListContainer";
import SearchOrders from "./components/Orders/SearchOrders";
import OrdersDetail from "./components/Orders/OrdersDetail";
import ErrorComponent from "./components/ErrorComponent";
import { HashRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import { OrdersProvider } from "./context/OrdersContext";
import { useEffect, useState } from "react";
import { loginWithGoogle, logoutFromGoogle } from "./firebase";
import { AES, enc } from "crypto-js";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      const decryptedUserData = AES.decrypt(
        localStorage.getItem("compras_z_user"),
        process.env.REACT_APP_PRIVATE_KEY
      );
      const userData = JSON.parse(decryptedUserData.toString(enc.Utf8));
      if (userData && userData.time > Date.now() - 1000 * 60 * 60) {
        setUser(userData);
      }
    } catch {
      localStorage.removeItem("compras_z_user")
    }
  }, []);

  const login = () => {
    loginWithGoogle()
      .then((loginData) => {
        setUser({
          name: loginData.displayName,
          email: loginData.email,
          uid: loginData.uid,
          time: Date.now(),
        });
        const userData = {
          name: loginData.displayName,
          email: loginData.email,
          uid: loginData.uid,
          time: Date.now(),
        };
        const encryptedUserData = AES.encrypt(
          JSON.stringify(userData),
          process.env.REACT_APP_PRIVATE_KEY
        ).toString();
        localStorage.setItem("compras_z_user", encryptedUserData);
      })
      .catch((error) => console.log("Unable to login", error));
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
    <OrdersProvider>
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
              <Route exact path="/orders/search">
                <SearchOrders />
              </Route>
              <Route exact path="/orders/:id_order">
                <OrdersDetail email={user.email} />
              </Route>
              <Route exact path="/orders">
                <OrdersContainer email={user.email} />
              </Route>
              <Route>
                <ErrorComponent />
              </Route>
            </Switch>
          </HashRouter>
        </CartProvider>
      </ProductsProvider>
    </OrdersProvider>
  );
}

export default App;
