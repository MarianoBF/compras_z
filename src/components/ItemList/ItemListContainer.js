import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemList from "./ItemList";
import {MOCKPRODUCTS} from "../../utils/mockProducts";
import {MOCKCATEGORIES} from "../../utils/mockCategories";
import Spinner from "react-bootstrap/Spinner";

export default function ItemListContainer({greeting}) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const {id_category} = useParams();
  const [isLoading, setIsLoading] = useState(true);

  //MOCK REQUEST FOR PRODUCT LIST
  useEffect(() => {
    if (id_category === undefined) {
      const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(MOCKPRODUCTS);
        }, 500);
      });
      getProducts.then(data => {
        setProducts(data);
        setIsLoading(false);
      });
    } else {
      //MOCK REQUEST WITH "FILTER"
      setIsLoading(true);
      let filtered = [...MOCKPRODUCTS];
      filtered = filtered.filter(item => item.category === +id_category);
      const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(filtered);
        }, 500);
      });
      getProducts.then(data => {
        setProducts(data);
        setIsLoading(false);
      });
    }
  }, [id_category]);

  //MOCK REQUEST FOR CATEGORY LIST
  useEffect(() => {
    const getCategories = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(MOCKCATEGORIES);
      }, 500);
    }, []);
    getCategories.then(data => setCategories(data));
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
