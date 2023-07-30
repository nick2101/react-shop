import {useContext} from "react";
import {ShopContext} from "../context";

function Product(props) {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price: {regularPrice, finalPrice},
    displayAssets: [{background, full_background}],
  } = props;

  const {addToCart = Function.prototype} = useContext(ShopContext);

  return <div className="card">
    <div className="card-image">
      <img src={background} alt={name}/>
    </div>
    <div className="card-content">
      <span className="card-title">{name}</span>
      <p>{description}</p>
    </div>
    <div className="card-action">
      <button className="btn blue darken-2" onClick={() => addToCart({id, name, price: regularPrice})}>
        Buy
      </button>
      <span className="right" style={{fontSize: "1.5rem"}}>
        {regularPrice ? regularPrice + " ₣" : "FREE"}
      </span>
    </div>
  </div>
}

export {Product};
