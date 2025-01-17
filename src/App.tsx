import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Provider, useDispatch } from "react-redux";

import Wizard from "./components/wizard";
import Header from "./components/header";
import store from "./store";
import Authenticate from "./components/authenticate";
import Footer from "./components/footer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Authenticate>
          <Wizard />
        </Authenticate>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
