import initialState from './initialState';
import {FETCH_STUFF, RECEIVE_STUFF} from '../actions/actionTypes';

export default function tickers(state = initialState.tickers, action) {
  let newState;
  switch (action.type) {
    case FETCH_STUFF:
      return action;
    case RECEIVE_STUFF:
      newState = action.tickers;
      return newState;
    default:
      return state;
  }
}