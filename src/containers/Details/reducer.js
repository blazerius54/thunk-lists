import {
  GET_GH_DETAILS_REQUEST,
  GET_GH_DETAILS_SUCCESS,
  GET_GH_DETAILS_ERROR,
  GET_SOF_DETAILS_REQUEST,
  GET_SOF_DETAILS_SUCCESS,
  GET_SOF_DETAILS_ERROR,
} from './consts';

export const initialState = {
  loading: false,
  error: false,
  ghRepoDetails: {},
  sofDetails: {},
};

function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GH_DETAILS_REQUEST:
    case GET_SOF_DETAILS_REQUEST:
      return {
        ...state,
        ghRepoDetails: {},
        sofDetails: {},
        loading: true,
      };
    case GET_GH_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        ghRepoDetails: action.ghRepoDetails,
      };
    case GET_SOF_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        sofDetails: action.sofDetails,
      };
    case GET_GH_DETAILS_ERROR:
    case GET_SOF_DETAILS_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}

export default detailsReducer;
