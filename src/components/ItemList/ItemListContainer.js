import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from "react-bootstrap/Spinner";
import {getFirestore} from "../../firebase";
import useMounted from "../hooks/useMounted";
import {useHistory} from "react-router-dom";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const {id_category} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useMounted();
  const [outOfRange, setOutOfRange] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (id_category === undefined) {
      const db = getFirestore();
      const itemCollection = db.collection("products");
      itemCollection
        .get()
        .then(data => {
          if (isMounted.current) {
            setProducts(
              data.docs
                .sort((a, b) => (+a.id > +b.id ? 1 : -1))
                .map(item => item.data())
            );
            setIsLoading(false);
          }
        })
        .catch(error => console.log(error));
    } else {
      const db = getFirestore();
      const productsToGet = db
        .collection("products")
        .where("category", "==", +id_category);
      productsToGet
        .get()
        .then(data => {
          if (isMounted.current) {
            if (data.empty === true) {
              setOutOfRange(true);
              setTimeout(() => {
                setOutOfRange(false);
                history.push("/");
              }, 5000);
            } else {
              setProducts(data.docs.map(item => item.data()));
              setIsLoading(false);
            }
          }
        })
        .catch(error => console.log(error));
    }
  }, [id_category, history, isMounted, products.length]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("categories");
    itemCollection
      .get()
      .then(data => {
        if (isMounted.current) {
          setCategories(data.docs.map(item => item.data()));
        }
      })
      .catch(error => console.log(error));
  }, [isMounted]);

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
        <h2>Trayendo listado de productos...</h2>
        <Spinner animation="border" />
      </div>
    );
  }

  if (outOfRange) {
    return (
      <div style={{textAlign: "center"}}>
        <h2>Categoría inexistente</h2>
        <h2>Serás redirigido a la página principal</h2>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mainTitle">
        Desde aquí podrás ver un listado de {category}{" "}
      </h1>
      <ItemList products={products} />
    </div>
  );
}
