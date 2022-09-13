import {useEffect, useState} from "react";
import {API_KEY, API_URL} from "../config"
import {Preloader} from "./Preloader";
import {ProductList} from "./ProductList";
import {CartIcon} from "./CartIcon";
import {MiniCart} from "./MiniCart";
import {Alert} from "./Alert";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShown, setCartShown] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  function addToCart(product) {
    const productIndex = order.findIndex(orderItem => orderItem.id === product.id);
    if (productIndex < 0) {
      const newProduct = {
        ...product,
        quantity: 1,
      }
      setOrder([...order, newProduct]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === productIndex) {
          return {...orderItem, quantity: orderItem.quantity + 1}
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertMessage(`${product.name} added to cart`);
  }

  function removeFromCart(productId) {
    const newOrder = order.filter(product => product.id !== productId);
    setOrder(newOrder);
  }

  function increaseCartQuantity(productId) {
    const newOrder = order.map((product) => {
      if (product.id === productId) {
        return {...product, quantity: product.quantity + 1}
      } else {
        return product;
      }
    });
    setOrder(newOrder);
  }

  function decreaseCartQuantity(productId) {
    const newOrder = order.map((product) => {
      if (product.id === productId) {
        return {...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1}
      } else {
        return product;
      }
    });
    setOrder(newOrder);
  }

  function handleCartShown() {
    setCartShown(!isCartShown);
  }

  function closeAlert() {
    setAlertMessage("");
  }

  function fakePlaceOrder() {
    setOrder([]);
    setCartShown(false);
    setAlertMessage("Order Successfully Placed");
  }

  useEffect(function getProducts() {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.shop) setProducts(data.shop);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <main className='container content'>
      {
        loading ? <Preloader/> : <ProductList products={products} addToCart={addToCart}/>
      }
      <CartIcon quantity={order.length} handleCartShown={handleCartShown}/>
      {
        isCartShown
          ? <MiniCart
            order={order}
            handleCartShown={handleCartShown}
            removeFromCart={removeFromCart}
            increaseCartQuantity={increaseCartQuantity}
            decreaseCartQuantity={decreaseCartQuantity}
            fakePlaceOrder={fakePlaceOrder}
          /> : null
      }
      {
        alertMessage ? <Alert message={alertMessage} closeAlert={closeAlert}/> : null
      }
    </main>
  );
}

export {Shop};
