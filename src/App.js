import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetails/ItemDetailsContainer";
import {useState} from "react";

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [itemDetails, setItemDetails] = useState(false);

  const handleShowDetails = (item) => {
    setItemDetails(item);
    setShowDetails(true);
    console.log(item);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Hola Ricardo"} handleShowDetails={handleShowDetails}/>
      {showDetails && <ItemDetailsContainer item={itemDetails} handleCloseDetails={handleCloseDetails}/>}
    </div>
  );
}

export default App;
