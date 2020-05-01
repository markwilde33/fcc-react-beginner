import React from "react";

function SchoolProducts(props) {
  return (
    <div className="product-card">
      <h3>Name: {props.name}</h3>
      <p>Price: ${props.price}</p>
      <h4>Description: {props.description}</h4>
    </div>
  );
}
export default SchoolProducts;
