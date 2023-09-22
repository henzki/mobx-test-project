import React from "react";
import { observer } from "mobx-react-lite";
import { useAppStore } from "../store/AppStoreProvider";

function Data() {
  const store = useAppStore();
  return (
    <div>
      <h1>Another Page</h1>
      <div>
        <h2>Customer Data</h2>
        <p>Name: {store.customerData.name}</p>
        <p>Email: {store.customerData.email}</p>
      </div>
      <div>
        <h2>Product Data</h2>
        <p>ID: {store.productData.id}</p>
        <p>Name: {store.productData.name}</p>
        <p>Price: {store.productData.price}</p>
      </div>
    </div>
  );
}

export default observer(Data);
