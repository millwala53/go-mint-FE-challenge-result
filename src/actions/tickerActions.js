import * as types from './actionTypes';
import axios from 'axios'
import config from '../config/appconfig'


export function receiveStuff(json) {
  return {type: types.RECEIVE_STUFF, tickers: json};
}

export function fetchStuff(params) {
  return dispatch => {
    return axios.get(config.url, {params:params})
    .then(res => {
      dispatch(receiveStuff(res.data))
    });
  };
}