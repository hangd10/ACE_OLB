import * as types from './actionTypes';

export function assignEmail(email) {
  return { type: types.ASSIGN_EMAIL, payload: email }
}

export function assignZip(zip) {
  return { type: types.ASSIGN_ZIP, payload: zip }
}
