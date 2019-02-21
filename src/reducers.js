import { combineReducers } from 'redux';
import appReducer from './containers/DataContainer/reducer';

export default function createReducer() {
  return combineReducers({
    appReducer,
  });
}
