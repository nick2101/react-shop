import {useContext, useEffect} from "react";
import {ShopContext} from "../context";

function Alert() {
  const {alertMessage: message, closeAlert = Function.prototype} = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [message]);

  return <div id="toast-container">
    <div className="toast">{message}</div>
  </div>
}

export {Alert};
