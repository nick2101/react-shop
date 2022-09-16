import {useContext} from "react";
import {ShopContext} from "../context";

function CartIcon() {
  const {
    order = [],
    handleCartShown = Function.prototype,
  } = useContext(ShopContext);

  const quantity = order.length;

  return (
    <div
      className="cart-icon blue darken-4 white-text"
      onClick={handleCartShown}
    >
      <i className="material-icons">shopping_cart</i>
      {
        quantity ? <span className="cart-quantity">{quantity}</span> : null
      }
    </div>
  );
}

export {CartIcon};
