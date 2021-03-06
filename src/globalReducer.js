import { TOGGLE_MODAL } from './containers/DataContainer/consts';

export const initialState = {
  urlRequest: '',
};

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        urlRequest: action.payload,
      };
    default:
      return state;
  }
}

export default globalReducer;
