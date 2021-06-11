import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from "react-bootstrap/Spinner";
import {getFirestore} from "../../firebase";

export default function ItemListContainer({greeting}) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const {id_category} = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id_category === undefined) {
      const db = getFirestore();
      const itemCollection = db.collection("products");
      itemCollection.get().then(data => {
        setProducts(
          data.docs
            .sort((a, b) => (+a.id > +b.id ? 1 : -1))
            .map(item => item.data())
        );
        setIsLoading(false);
      });
    } else {
      setIsLoading(true);
      const db = getFirestore();
      const productsToGet = db
        .collection("products")
        .where("category", "==", 1);
      productsToGet.get().then(data => {
        setProducts(data.docs.map(item => item.data()));
      });
      //TODO: Add error handling
      setIsLoading(false);
    }
  }, [id_category]);

  //MOCK REQUEST FOR CATEGORY LIST
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("categories");
    itemCollection.get().then(data => {
      setCategories(data.docs.map(item => item.data()));
    });
  });

  const [category, setCategory] = useState("");

  useEffect(() => {
    if (id_category === undefined) {
      setCategory("todas las categorías");
    } else {
      const categoryFilter = categories.filter(
        item => item.id === +id_category
      );
      setCategory("la categoría " + categoryFilter[0]?.name);
    }
  }, [categories, id_category, category]);

  if (isLoading) {
    return (
      <div style={{textAlign: "center"}}>
        <h1>{greeting}</h1>
        <h2>Trayendo listado de productos...</h2>
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="mainTitle">
        {greeting}, desde aquí podrás ver un listado de {category}{" "}
      </h1>
      <ItemList products={products} />
    </div>
  );
}
