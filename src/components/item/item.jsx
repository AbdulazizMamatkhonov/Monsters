import React from "react";
import "./item.css";
function Item(props) {
  const { id, email, name } = props.user;
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?set=set2&size=150x150`} alt="" />
      <h2>{name}</h2>
      <h2>{email}</h2>
    </div>
  );
}
export default Item;
