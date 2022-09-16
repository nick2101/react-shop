export function reducer(state, {type, payload}) {
  switch (type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: payload.products || [],
        loading: false,
      }
    case "ADD_TO_CART":
      let newOrder = state.order;
      const productIndex = state.order.findIndex(orderItem => orderItem.id === payload.product.id);
      if (productIndex < 0) {
        const newProduct = {
          ...payload.product,
          quantity: 1,
        }
        newOrder = [...state.order, newProduct];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === productIndex) {
            return {...orderItem, quantity: orderItem.quantity + 1}
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertMessage: `${payload.product.name} added to cart`,
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        order: state.order.filter(product => product.id !== payload.productId),
      }
    case "INCREASE_CART_QUANTITY":
      return {
        ...state,
        order: state.order.map((product) => {
          if (product.id === payload.productId) {
            return {...product, quantity: product.quantity + 1}
          } else {
            return product;
          }
        }),
      }
    case "DECREASE_CART_QUANTITY":
      return {
        ...state,
        order: state.order.map((product) => {
          if (product.id === payload.productId) {
            return {...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1}
          } else {
            return product;
          }
        }),
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
