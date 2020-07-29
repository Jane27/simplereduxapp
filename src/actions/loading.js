import {
    IS_LOADING,
  } from "../constants/demoConstants";
  
  export function isLoading(payload) {
    return {
      type: IS_LOADING,
      payload,
    };
  }