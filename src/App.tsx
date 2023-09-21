import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { observer } from "mobx-react-lite";
import { AppStoreProvider } from "./store/AppStoreProvider";
import { AppStore } from "./store/AppStore";
import Data from "./pages/Data";

function App() {
  const store = new AppStore();
  return (
    <AppStoreProvider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<Data />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AppStoreProvider>
  );
}

export default observer(App);
