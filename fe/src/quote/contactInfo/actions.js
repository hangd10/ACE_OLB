import * as types from './actionTypes';

export function updateEmail(email) {
  return { type: types.UPDATE_EMAIL, payload: email }
}