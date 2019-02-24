import { TOGGLE_MODAL } from './containers/DataContainer/consts';

export const initialState = {
  repoFullName: 'reducer',
};

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        repoFullName: action.payload,
      };
    default:
      return state;
  }
}

export default globalReducer;
