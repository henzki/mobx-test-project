import React from "react";
import { observer } from "mobx-react-lite";
import appStore from "../store/AppStore";

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Tallennettu data: {appStore.data}</p>
    </div>
  );
}

export default observer(About);
