import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ key, item, checked, handleCheck, handleDelete}) => {
  return (
    <li className="item" key={key}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        style={checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
