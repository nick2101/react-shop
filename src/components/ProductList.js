import {useContext} from "react";
import {ShopContext} from "../context";
import {Product} from "./Product";

function ProductList() {
  const {products = []} = useContext(ShopContext);

  if (!products.length) return <h3>Sorry, the store is currently unavailable. Please try again later.</h3>

  return <div className="products">
    {products.map(product => <Product key={product["mainId"]} {...product}/>)}
  </div>
}

export {ProductList};
