import React, { useEffect } from "react";
import axios from "axios";
import ProductList from "../components/Index/ProductList";
import baseUrl from "../utils/baseUrl";

function Home({ products }) {
  return <ProductList products={products} />;
}

Home.getInitialProps = async () => {
  // fetch date on server
  const url = `${baseUrl}/api/products`;
  const response = await axios.get(url);
  // return response data as an object
  // NOTE: this object will be merged with existing props
  return { products: response.data };
};

export default Home;
