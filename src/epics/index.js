import { combineEpics } from 'redux-observable';
import {
    fetchCharacterListEpic,
    fetchCharacterDetailEpic,
  } from "./character";

const rootEpic = combineEpics(
    fetchCharacterListEpic,
    fetchCharacterDetailEpic
);
// your epics go here.
export default rootEpic;
