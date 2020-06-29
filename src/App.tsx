import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Wizard from "./components/wizard";
import Header from "./components/header";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <header className="App-header"> */}
        <Header />
        <Wizard />
        {/* </header> */}
      </div>
    </Provider>
  );
}

export default App;
