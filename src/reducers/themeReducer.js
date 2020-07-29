import { CHANGE_THEME } from '../constants/actionTypes/theme';

const initialState = {
  name: 'light',
};

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME: {
      return { name: action.payload };
    }
    default: {
      return state;
    }
  }
}
