import { createSelector } from "reselect";

const getCharacters = (character) => character.data;
const getSearchTerm = (character) => character.searchTerm;

export const getCharactersBySearchTerm = createSelector(
  [getCharacters, getSearchTerm],
  (data, searchTerm) => {
    return searchTerm
      ? data.filter(({ name }) =>
          name.toLowerCase().startsWith(searchTerm.toLowerCase())
        )
      : data;
  }
);
