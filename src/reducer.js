export function reducer(state, {type, payload}) {
  switch (type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: payload.products || [],
        loading: false,
      }
    case "ADD_TO_CART":
      let atcOrder = state.order;
      const productIndex = state.order.findIndex(orderItem => orderItem.id === payload.product.id);
      if (productIndex < 0) {
        const newProduct = {
          ...payload.product,
          quantity: 1,
        }
        atcOrder = [...state.order, newProduct];
      } else {
        atcOrder = state.order.map((orderItem, index) => {
          if (index === productIndex) {
            return {...orderItem, quantity: orderItem.quantity + 1}
          } else {
            return orderItem;
          }
        });
      }

      localStorage.setItem("order", JSON.stringify(atcOrder));

      return {
        ...state,
        order: atcOrder,
        alertMessage: `${payload.product.name} added to cart`,
      }
    case "REMOVE_FROM_CART":
      const rfcOrder = state.order.filter(product => product.id !== payload.productId);

      localStorage.setItem("order", JSON.stringify(rfcOrder));

      return {
        ...state,
        order: rfcOrder,
      }
    case "INCREASE_CART_QUANTITY":
      const icqOrder = state.order.map((product) => {
        if (product.id === payload.productId) {
          return {...product, quantity: product.quantity + 1}
        } else {
          return product;
        }
      });

      localStorage.setItem("order", JSON.stringify(icqOrder));

      return {
        ...state,
        order: icqOrder,
      }
    case "DECREASE_CART_QUANTITY":
      const dcqOrder = state.order.map((product) => {
        if (product.id === payload.productId) {
          return {...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1}
        } else {
          return product;
        }
      });

      localStorage.setItem("order", JSON.stringify(dcqOrder));

      return {
        ...state,
        order: dcqOrder,
      }
    case "HANDLE_CART_SHOWN":
      return {
        ...state,
        isCartShown: !state.isCartShown,
      }
    case "CLOSE_ALERT":
      return {
        ...state,
        alertMessage: "",
      }
    case "FAKE_PLACE_ORDER":
      if (state.order.length > 0) {
        localStorage.setItem("order", JSON.stringify([]));

        return {
          ...state,
          order: [],
          isCartShown: false,
          alertMessage: "Order Successfully Placed",
        }
      } else {
        return state;
      }
    default:
      return state;
  }
}
