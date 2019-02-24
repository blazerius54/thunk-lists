import {
  GET_SOF_POSTS_REQUEST,
  GET_SOF_POSTS_SUCCESS,
  GET_SOF_POSTS_ERROR,
  GET_GH_REPOS_REQUEST,
  GET_GH_REPOS_SUCCESS,
  GET_GH_REPOS_ERROR,
  TOGGLE_MODAL,
} from './consts';

export const initialState = {
  loading: false,
  error: '',
  ghRepos: [],
  sofQuestions: [],
  showModal: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SOF_POSTS_REQUEST:
    case GET_GH_REPOS_REQUEST:
      return {
        ...state,
        loading: true,
        ghRepos: [],
        sofQuestions: [],
      };
    case GET_SOF_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        sofQuestions: action.sofQuestions,
      };
    case GET_GH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        ghRepos: action.ghRepos,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      };
    default:
      return state;
  }
}

export default appReducer;
