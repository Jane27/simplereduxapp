import {
    FETCH_ALL_SUCCESS,
    FETCH_ALL_ERROR,
    SEARCH,
    FETCH_DETAIL_SUCCESS,
    FETCH_DETAIL_ERROR,
  } from "../constants/actionTypes/character";
  
  const initialState = {
    data: [],
    searchTerm: "",
    detail: {},
    error: "",
  };
  
  export default function characterReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_ALL_SUCCESS: {
        return { ...state, ...{ data: action.payload.docs } };
      }
      case FETCH_ALL_ERROR: {
        return { ...state, ...{ error: action.payload } };
      }
      case SEARCH: {
        return { ...state, ...{ searchTerm: action.payload } };
      }
      case FETCH_DETAIL_SUCCESS: {
        return { ...state, ...{ detail: action.payload } };
      }
      case FETCH_DETAIL_ERROR: {
        return { ...state, ...{ error: action.payload } };
      }
      default: {
        return state;
      }
    }
  }
  