import {useContext} from "react";
import {ShopContext} from "../context";
import {MiniCartItem} from "./MiniCartItem";

function MiniCart() {
  const {
    order = [], handleCartShown = Function.prototype, fakePlaceOrder = Function.prototype,
  } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return <div className="mini-cart">
    <div className="mini-cart-header blue darken-1">Cart</div>
    <i className="material-icons mini-cart-close white-text" onClick={handleCartShown}>close</i>
    <ul className="mini-cart-items collection">
      {order.length ? order.map(item => <MiniCartItem key={item.id} {...item}/>) :
        <li className="collection-item">Cart is empty</li>}
    </ul>
    <div className="mini-cart-total blue lighten-2">{`Total: ${totalPrice} ₣`}</div>
    <button
      className="btn blue darken-2"
      disabled={order.length < 1}
      style={{display: "block", margin: "5px auto 5px auto"}}
      onClick={fakePlaceOrder}
    >
      Place Order
    </button>
  </div>
}

export {MiniCart};
