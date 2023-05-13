import { useEffect, useState } from "react";
import { backend } from "./constant";
import "./app.css";

function App() {
  const [product, setProduct] = useState([]);
  const init = async () => {
    const response = await fetch(`${backend}/api/product`);

    const json = await response.json();
    setProduct(json.mydata);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="main">
      {product.map((e) => (
        <div className="container">
          <div className="all">
            <label>BrandName:</label>
            <div>{e.name}</div>
          </div>
          <div className="all">
            <label>Owner:</label>
            <div>{e.company}</div>
          </div>
          <div className="all">
            <label>rating:</label>
            <div>{e.rating}</div>
          </div>
          <div className="all">
            <label>Price:</label>
            <div>{e.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
