import {useContext} from "react";
import {ShopContext} from "../context";

function MiniCartItem(props) {
  const {id, name, price, quantity} = props;
  const {
    removeFromCart = Function.prototype,
    increaseCartQuantity = Function.prototype,
    decreaseCartQuantity = Function.prototype,
  } = useContext(ShopContext);

  return <li className="collection-item">
    <div className="mini-cart-i-name">
      <span>{name}</span>
      <i className="material-icons mini-cart-i-remove mobile-only blue-text text-darken-2"
         onClick={() => removeFromCart(id)}>clear</i>
    </div>
    <div className="mini-cart-i-info">
      <button className="mini-cart-i-quantity transparent" onClick={() => decreaseCartQuantity(id)}>
        <i className="material-icons">remove</i>
      </button>
      <span style={{verticalAlign: "super"}}>{`x${quantity}`}</span>
      <button className="mini-cart-i-quantity transparent" onClick={() => increaseCartQuantity(id)}>
        <i className="material-icons">add</i>
      </button>
      <span style={{verticalAlign: "super"}}>{`= ${price * quantity} ₣`}</span>
      <div className="secondary-content ">
        <i className="material-icons mini-cart-i-remove desktop-tablet-only blue-text text-darken-2"
           onClick={() => removeFromCart(id)}>clear</i>
      </div>
    </div>
  </li>
}

export {MiniCartItem};
