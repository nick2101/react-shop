import {useContext, useEffect} from "react";
import {API_KEY, API_URL} from "../config"
import {ShopContext} from "../context";
import {Preloader} from "./Preloader";
import {ProductList} from "./ProductList";
import {CartIcon} from "./CartIcon";
import {MiniCart} from "./MiniCart";
import {Alert} from "./Alert";

function Shop() {
  const {loading, order, isCartShown, alertMessage, setProducts} = useContext(ShopContext);

  useEffect(function getProducts() {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      }
    })
      .then(response => response.json())
      .then(data => {
        setProducts(data["shop"]);
      })
      .catch((error) => {
        console.error(error);
        setProducts([]);
      });
  }, []);

  return <main className='container content'>
    {loading ? <Preloader/> : <ProductList/>}
    <CartIcon quantity={order.length}/>
    {isCartShown ? <MiniCart/> : null}
    {alertMessage ? <Alert/> : null}
  </main>
}

export {Shop};
