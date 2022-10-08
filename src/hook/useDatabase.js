import { useEffect, useState } from "react";
import axios from "axios";

const useDatabase = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [getProduct, setGetProduct] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setAllUsers(response.data.data);
        setAllProducts(response.data.data);
        setGetProduct(response.data.data);
        //console.log(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return { allUsers, allProducts, getProduct, setGetProduct, loading, error };
};

export default useDatabase;
