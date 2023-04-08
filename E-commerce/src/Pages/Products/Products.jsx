import React from "react";
import "./Products.css";
import Item from "../../components/Item/Item";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";


function Products() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/category/${id}`
  );
  console.log(data);
  return (
    <div className="products">
      <div className="ptitle">
        <p>Products</p>
      </div>
      <div className="list">
        {error
          ? "error"
          : loading
          ? "loading"
          : data?.map((item) => <Item item={item} />)}
      </div>
    </div>
  );
}

export default Products;
