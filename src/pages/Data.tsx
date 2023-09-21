import React from "react";
import { observer } from "mobx-react-lite";
import { useAppStore } from "../store/AppStoreProvider";

function Data() {
  const store = useAppStore();
  return (
    <div>
      <h2>Data</h2>
      <p>Tallennettu data: {store.data}</p>
    </div>
  );
}

export default observer(Data);
