import { combineReducers } from 'redux';
import appReducer from './containers/DataContainer/reducer';
import detailsReducer from './containers/Details/reducer';
import globalReducer from './globalReducer';

export default function createReducer() {
  return combineReducers({
    globalReducer,
    appReducer,
    detailsReducer,
  });
}
