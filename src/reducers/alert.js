/* eslint-disable import/no-anonymous-default-export */
import { SET_ALERT } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    default:
      return state;
  }
}
