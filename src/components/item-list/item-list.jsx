import "./item-list.css";
import React from "react";
import Item from "../item/item";
export const Itemlist = (props) => {
  return (
    <div className="item-list">
      {props.users.map((user) => {
        const { id, name, email } = user;
        return <Item key={id} user={user}></Item>;
      })}
    </div>
  );
};
