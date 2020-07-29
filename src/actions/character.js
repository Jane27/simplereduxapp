import {
    SEARCH,
    FETCH_ALL_START,
    FETCH_ALL_SUCCESS,
    FETCH_ALL_ERROR,
    FETCH_DETAIL_START,
    FETCH_DETAIL_SUCCESS,
    FETCH_DETAIL_ERROR,
  } from "../constants/actionTypes/character";
  
  export function search(term) {
    return {
      type: SEARCH,
      payload: term,
    };
  }
  
  export function fetchCharacterList() {
    return {
      type: FETCH_ALL_START,
      payload: {},
    };
  }
  
  export function fetchCharacterListSucceed(payload) {
    return {
      type: FETCH_ALL_SUCCESS,
      payload,
    };
  }
  
  export function fetchCharacterListFailed(payload) {
    return {
      type: FETCH_ALL_ERROR,
      payload,
    };
  }
  
  export function fetchCharacterDetail(id) {
    return {
      type: FETCH_DETAIL_START,
      payload: id,
    };
  }
  
  export function fetchCharacterDetailSucceed(payload) {
    return {
      type: FETCH_DETAIL_SUCCESS,
      payload,
    };
  }
  
  export function fetchCharacterDetailFailed(payload) {
    return {
      type: FETCH_DETAIL_ERROR,
      payload,
    };
  }
  