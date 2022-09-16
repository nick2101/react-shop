import {useContext} from "react";
import {ShopContext} from "../context";

function MiniCartItem(props) {
  const {
    id,
    name,
    price,
    quantity,
  } = props;

  const {
    removeFromCart = Function.prototype,
    increaseCartQuantity = Function.prototype,
    decreaseCartQuantity = Function.prototype,
  } = useContext(ShopContext);

  return (
    <li className="collection-item">
      {name}
      <button
        className="cart-quantity transparent"
        onClick={() => decreaseCartQuantity(id)}
      >
        <i className="material-icons">remove</i>
      </button>
      x{quantity}
      <button
        className="cart-quantity transparent"
        onClick={() => increaseCartQuantity(id)}
      >
        <i className="material-icons">add</i>
      </button>
      <span className="secondary-content">
        <i
          className="material-icons cart-remove blue-text text-darken-2"
          onClick={() => removeFromCart(id)}
        >clear</i>
      </span>
      <span className="right">= {price * quantity} ₣</span>
    </li>
  );
}

export {MiniCartItem};
