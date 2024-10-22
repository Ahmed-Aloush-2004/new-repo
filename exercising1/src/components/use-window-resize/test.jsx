import React from "react";
import useWindowResize from "./";

function UseWindowResize() {
  const windowSize = useWindowResize();

  const { width, height } = windowSize;

  return (
    <div>
      <h1 >Use Window resize Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
}

export default UseWindowResize;
// style={{width:`${width}px`,fontSize:`${width/10}px`}}