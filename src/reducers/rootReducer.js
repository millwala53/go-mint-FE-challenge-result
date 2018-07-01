import {combineReducers} from 'redux';
import tickers from './tickerReducer';

const rootReducer = combineReducers({
  tickers
});

export default rootReducer;