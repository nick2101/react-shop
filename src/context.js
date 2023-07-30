import {createContext, useReducer} from "react";
import {reducer} from "./reducer";

export const ShopContext = createContext();

const initialState = {
  loading: true,
  products: [],
  order: JSON.parse(localStorage.getItem("order")) || [],
  isCartShown: false,
  alertMessage: "",
}

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  state.setProducts = (products) => {
    dispatch({type: "SET_PRODUCTS", payload: {products}});
  }

  state.addToCart = (product) => {
    dispatch({type: "ADD_TO_CART", payload: {product}});
  }

  state.removeFromCart = (productId) => {
    dispatch({type: "REMOVE_FROM_CART", payload: {productId}});
  }

  state.increaseCartQuantity = (productId) => {
    dispatch({type: "INCREASE_CART_QUANTITY", payload: {productId}});
  }

  state.decreaseCartQuantity = (productId) => {
    dispatch({type: "DECREASE_CART_QUANTITY", payload: {productId}});
  }

  state.handleCartShown = () => {
    dispatch({type: "HANDLE_CART_SHOWN"});
  }

  state.closeAlert = () => {
    dispatch({type: "CLOSE_ALERT"});
  }

  state.fakePlaceOrder = () => {
    dispatch({type: "FAKE_PLACE_ORDER"});
  }

  return <ShopContext.Provider value={state}>
    {children}
  </ShopContext.Provider>
}
