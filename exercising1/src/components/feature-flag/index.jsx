import React, { useContext } from "react";
import LightDarkMode from "../light-dark-mood";
import TicTacToe from "../tic-tact-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";
// showLightAndDarkMode: false,
// showTicTacToeBoard: true,
// showRandomColorGenerator: true,
// showAccordian: false,
// showTreeView: true,

function FeatureFlags() {


    const {loading,enabledFlags} = useContext(FeatureFlagsContext)








  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <div>Show Random Generator Color</div>,
    },
    {
      key: "showAccordian",
      component: <div>Show showAccordian</div>,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
  ];

  function chackEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if(loading) return <h1>Loading data...</h1>
  return (
    <div>
      <h1>Feature Flags</h1>
      {
        componentsToRender.map((componentItem)=> chackEnabledFlags(componentItem.key) ? componentItem.component : null)
      }
    </div>
  );
}

export default FeatureFlags;
