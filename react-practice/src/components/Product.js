import React from "react";
import "./productstyle.css";
const product = ({title,price,onAddToCart}) => {
 // console.log(props);


  // conditonal formating
  var priceClass = price <= 500 ? "orange" : "green";
  return (
    <div>
      {/* if you want to embed var title the do it like this */}

      <h1>Product Title</h1>
      <h2 style={{ backgroundColor: "Red" }}>{title}</h2>
      {/* <span className="green">
        <b>price: </b> {props.price}
      </span> */}
      <div className={priceClass}>
        <b>price: </b> {price}
        <button
          onClick={() => {
            onAddToCart(title);
          }}
        >
          Add to Cart
        </button>
      </div>
      <hr />
    </div>
  );
};

export default product;
