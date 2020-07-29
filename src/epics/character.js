import { mergeMap, map, catchError, startWith, endWith } from "rxjs/operators";
import { of } from "rxjs";
import { ofType } from "redux-observable";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import {
  FETCH_ALL_START,
  FETCH_DETAIL_START,
} from "../constants/actionTypes/character";
import { getCharacters, getCharacterDetail } from "../apis/character";
import {
  fetchCharacterListSucceed,
  fetchCharacterDetailSucceed,
  fetchCharacterListFailed,
  fetchCharacterDetailFailed,
} from "../actions/character";

const fetchCharacterListEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_ALL_START),
    mergeMap((action) =>
      getCharacters().pipe(
        map((data) => fetchCharacterListSucceed(data.response)),
        startWith(showLoading()),
        endWith(hideLoading()),
        catchError((error) => of(fetchCharacterListFailed))
      )
    )
  );

const fetchCharacterDetailEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_DETAIL_START),
    mergeMap((action) =>
      getCharacterDetail(action.payload).pipe(
        map((data) => fetchCharacterDetailSucceed(data.response)),
        startWith(showLoading()),
        endWith(hideLoading()),
        catchError((error) => of(fetchCharacterDetailFailed))
      )
    )
  );

export { fetchCharacterListEpic, fetchCharacterDetailEpic };
