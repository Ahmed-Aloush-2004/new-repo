import React from "react";
import "./style.css";
import MenuList from "./menu-list";
function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}

export default TreeView;
