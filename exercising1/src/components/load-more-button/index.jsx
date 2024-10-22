import React, { useEffect, useState } from "react";
import "./style.css";
function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
const [disabledButton, setDisabledButton] = useState(false);
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData)=> [...prevData,...result.products]);
        // console.log(result.products);
        
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);
useEffect(() => {
if(products && products.length === 100) setDisabledButton(true);
}, [products])

  if (loading) return <div>Loading data ! Please wait.</div>;
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products?.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disabledButton} onClick={()=> setCount(count + 1 )}>Load More Products</button>
        {disabledButton && <p>You have reached to 100 products</p>}
      </div>
    </div>
  );
}

export default LoadMoreData;

// <button disabled={count === 4} onClick={handleSkip}>
//   Load more
// </button>
