import { createStore } from "redux";

import { todoReducer } from "./Reducers/todo";

const store = createStore(todoReducer)

export default store