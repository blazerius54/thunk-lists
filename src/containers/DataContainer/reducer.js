import {
  GET_SOF_POSTS_REQUEST,
  GET_SOF_POSTS_SUCCESS,
  GET_SOF_POSTS_ERROR,
} from './consts';

export const initialState = {
  foo: 'bar',
  loading: false,
  error: '',
  ghRepos: [],
  sofQuestions: [],
};

function appReducer(state = initialState, action) {
  switch(action.type) {
    case GET_SOF_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SOF_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        sofQuestions: action.sofQuestions,
      };
    default:
      return state;
  }
}

export default appReducer;
