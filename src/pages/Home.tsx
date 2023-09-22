import React, { useState } from "react";
import { useAppStore } from "../store/AppStoreProvider";

function Home() {
  const appStore = useAppStore();
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  const handleCustomerDataSubmit = () => {
    appStore.setCustomerData({ name: customerName, email: customerEmail });
  };

  const handleProductDataSubmit = () => {
    appStore.setProductData({
      id: productId,
      name: productName,
      price: productPrice,
    });
  };

  return (
    <div>
      <h1>Home Component</h1>
      <div>
        <h2>Customer Data</h2>
        <input
          type="text"
          placeholder="Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
        />
        <button onClick={handleCustomerDataSubmit}>Set Customer Data</button>
      </div>
      <div>
        <h2>Product Data</h2>
        <input
          type="text"
          placeholder="ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(Number(e.target.value))}
        />
        <button onClick={handleProductDataSubmit}>Set Product Data</button>
      </div>
    </div>
  );
}

export default Home;
