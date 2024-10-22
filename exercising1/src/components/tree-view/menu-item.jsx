import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState([]);
  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }
  return (
    
    <li >
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 && (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? <FaMinus color="white" size={25}/> : <FaPlus color="white" size={25}/>}
          </span>
        )}
      </div>
      {item &&
        item.children &&
        item.children.length &&
        displayCurrentChildren[item.label] && <MenuList list={item.children} />}
    </li>
  );
}

export default MenuItem;
