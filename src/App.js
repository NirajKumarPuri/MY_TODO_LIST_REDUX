import React from "react";
import './App.css';

import Todo from "./Component/Todo";

import store from "./Store";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>

  );
}

export default App;