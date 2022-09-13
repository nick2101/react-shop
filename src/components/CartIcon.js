function CartIcon(props) {
  const {quantity = 0, handleCartShown = Function.prototype} = props;

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
