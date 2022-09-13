import {useEffect} from "react";

function Alert(props) {
  const {message = "", closeAlert = Function.prototype} = props;

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
