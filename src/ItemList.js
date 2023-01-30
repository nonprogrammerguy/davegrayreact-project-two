import React from "react";
import LineItem from "./LineItem";


const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <LineItem 
            key={item.id}
            item={item}
            checked={item.checked}
            handleCheck={handleCheck} 
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;
