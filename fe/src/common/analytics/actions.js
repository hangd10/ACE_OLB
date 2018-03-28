import * as types from './actionTypes';

export function updateLang(lang) {
  return { type: types.UPDATE_LANG, payload: lang }
}
