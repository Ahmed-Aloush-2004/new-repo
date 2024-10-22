import React, { useRef } from "react";
import useFetch from "../use-fetch";

function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const bottomRef = useRef(null);
  if (pending) {
    return <h1>Loading!</h1>;
  }
  if (error) return <h1>{error}</h1>;

  function handleScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  function handleScrollToBottom() {
    // window.scrollTo({ top: bottomRef.current.offsetTop, left: 0, behavior: "smooth" });
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{ listStyle: "none", textAlign: "center" }}>
        {data && data.products && data?.products.length
          ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
}

export default ScrollToTopAndBottom;
//   <div style={{ height: "100vh" }}></div>
