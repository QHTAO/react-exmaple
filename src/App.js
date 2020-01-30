import React from "react";
import AppRouter from "./routes/";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./store/";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const middlewares = [thunk];
// redux config
let store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
function App() {
  return (
    <Provider store={store}>
      <AppRouter></AppRouter>
    </Provider>
  );
}

export default App;
