import "./styles.css";
import { useState } from "react";

export default function App() {
  const [price, setPrice] = useState(1699);
  const [installment, setInstallment] = useState([]);
  
  const handleClick = (e) => {
    console.log("hello world");
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="all-laptops">
        <figure>
          <img src="https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_16-inch_macbook_pro_2023_1_-_tejar.jpg" />
        </figure>
        <div className="laptop-content">
          <h2 style={{ fontSize: "24px" }}>Macbook Pro M1</h2>
          <h3>Price: ${price}</h3>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
