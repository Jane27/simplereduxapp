import {
    CHANGE_THEME,
  } from "../constants/actionTypes/theme";
  
  export function changeTheme(theme) {
    return {
      type: CHANGE_THEME,
      payload: theme,
    };
  }