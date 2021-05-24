import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetails/ItemDetailsContainer";
import {useState} from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [itemDetails, setItemDetails] = useState(false);

  const handleShowDetails = item => {
    setItemDetails(item);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <BrowserRouter>
      <NavBar />

    <Switch> 
    <Route path="/"><ItemListContainer /></Route>
    <Route path="/category/:id"><ItemListContainer /></Route>
    <Route path="/item/:id"><ItemDetailsContainer /></Route>

   <ItemListContainer
        greeting={"Hola Ricardo"}
        handleShowDetails={handleShowDetails}
      />
      {showDetails && (
        <ItemDetailsContainer
          item={itemDetails}
          handleCloseDetails={handleCloseDetails}
        />
      )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
