import {Product} from "./Product";

function ProductList(props) {
  const {products = [], addToCart = Function.prototype} = props;

  if (!products.length) return <h3>Sorry, the store is currently unavailable. Please try again later.</h3>

  return <div className="products">
    {products.map(product => (<Product key={product.mainId} {...product} addToCart={addToCart}/>))}
  </div>
}

export {ProductList};
