import {
  GET_GH_DETAILS_REQUEST,
  GET_GH_DETAILS_SUCCESS,
  GET_GH_DETAILS_ERROR,
  GET_SOF_DETAILS_ERROR,
  GET_SOF_DETAILS_REQUEST,
  GET_SOF_DETAILS_SUCCESS,
} from './consts';

export const initialState = {
  loading: false,
  ghRepoDetails: {},
};

function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GH_DETAILS_REQUEST:
      return {
        ...state,
        ghRepoDetails: {},
        loading: true,
      };
    case GET_GH_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        ghRepoDetails: action.ghRepoDetails,
      };
    default:
      return state;
  }
}

export default detailsReducer;
