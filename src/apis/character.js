import { ajax } from "rxjs/ajax";
import { API_HOST, API_KEY } from "../constants/apiConstants";

export const getCharacters = () => {
  return ajax({
    url: `${API_HOST}/character`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};

export const getCharacterDetail = (id) => {
  return ajax({
    url: `${API_HOST}/character/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};
