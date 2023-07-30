import {useContext} from "react";
import {ShopContext} from "../context";

function CartIcon() {
  const {order = [], handleCartShown = Function.prototype} = useContext(ShopContext);

  return <div className="cart-icon blue darken-4 white-text" onClick={handleCartShown}>
    <i className="material-icons">shopping_cart</i>
    {order.length ? <span className="cart-quantity">{order.length}</span> : null}
  </div>
}

export {CartIcon};
