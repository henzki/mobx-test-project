import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Jos haluat aloittaa suorituskyvyn mittaamisen sovelluksessasi, välitä funktio
  // tulosten kirjaamiseksi (esim. reportWebVitals(console.log))
  // tai lähetä ne analytiikkaan. Lue lisää: https://bit.ly/CRA-vitals
  reportWebVitals();
} else {
  console.error("Element with ID 'root' not found");
}
