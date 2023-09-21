import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useAppStore } from "../store/AppStoreProvider";

function Home() {
  const store = useAppStore();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSaveData = () => {
    store.setData(inputValue);
  };

  return (
    <div>
      <h2>Home</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSaveData}>Tallenna</button>
    </div>
  );
}

export default observer(Home);
