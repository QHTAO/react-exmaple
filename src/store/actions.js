import {
  SHOW_LOADING,
  HIDE_LOADING,
  SHOW_TOPTIPS,
  HIDE_TOPTIPS
} from "./constants";

export const showLoading = () => {
  return {
    type: SHOW_LOADING
  };
};
export const hideLoading = () => {
  return {
    type: HIDE_LOADING
  };
};
export const showToptips = toptipsConfig => {
  return {
    type: SHOW_TOPTIPS,
    toptips: toptipsConfig
  };
};
export const hideToptips = () => {
  return {
    type: HIDE_TOPTIPS
  };
};
