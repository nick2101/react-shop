import {useContext} from "react";
import {ShopContext} from "../context";
import {MiniCartItem} from "./MiniCartItem";

function MiniCart() {
  const {
    order = [],
    handleCartShown = Function.prototype,
    fakePlaceOrder = Function.prototype,
  } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <ul className="collection mini-cart">
      <li
        className="collection-item blue darken-1 active"
        style={{fontSize: "16px", fontWeight: "bold"}}
      >
        Cart
      </li>
      {
        order.length
          ? order.map(item => (
            <MiniCartItem
              key={item.id}
              {...item}
            />))
          : <li className="collection-item">Cart is empty</li>
      }
      <li
        className="collection-item blue lighten-2 active"
        style={{textAlign: "right", fontWeight: "bold"}}
      >
        Total: {totalPrice} ₣
      </li>
      <button
        className="btn blue darken-2"
        disabled={order.length < 1}
        style={{display: "block", margin: "5px auto 5px auto"}}
        onClick={fakePlaceOrder}
      >
        Place Order
      </button>
      <i
        className="material-icons cart-close white-text"
        onClick={handleCartShown}
      >close</i>
    </ul>
  );
}

export {MiniCart};
