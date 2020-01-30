import {
  SHOW_LOADING,
  HIDE_LOADING,
  HIDE_TOPTIPS,
  SHOW_TOPTIPS
} from "./constants";
import { combineReducers } from "redux";

const AppReducers = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case "APP_SET_TOKEN":
      return Object.assign({}, state, { token: action.token });
    case "SET_CONTEXT":
      return Object.assign({}, state, { context: action.context });
    case SHOW_LOADING:
      return Object.assign({}, state, { isLoading: true });
    case HIDE_LOADING:
      return Object.assign({}, state, { isLoading: false });
    case HIDE_TOPTIPS:
      return Object.assign({}, state, { toptips: { show: false } });
    case SHOW_TOPTIPS:
      return Object.assign({}, state, { toptips: action.toptips });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: AppReducers
});

export default rootReducer;
