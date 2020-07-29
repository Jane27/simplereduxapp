import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loadingBarReducer } from 'react-redux-loading-bar'
import characterReducer from "../reducers/characterReducer";
import themeReducer from "../reducers/themeReducer";

const rootReducer = (history) =>
  combineReducers({
    loadingBar: loadingBarReducer,
    router: connectRouter(history),
    character: characterReducer,
    theme: themeReducer,
  });

export default rootReducer;
