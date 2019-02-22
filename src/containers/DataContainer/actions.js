import {
  GET_SOF_POSTS_REQUEST,
  GET_SOF_POSTS_SUCCESS,
  GET_SOF_POSTS_ERROR,
} from './consts';
import { getSofQuestions } from '../../network';

export const getSofPostsRequests = () => ({
  type: GET_SOF_POSTS_REQUEST,
});

export const getSofPostsSuccess = sofQuestions => ({
  type: GET_SOF_POSTS_SUCCESS,
  sofQuestions,
});

export function myThunkActionCreator() {
  return dispatch => {
    dispatch(getSofPostsRequests());

    getSofQuestions()
      .then(response => response.json())
      .then(response => {
        dispatch(getSofPostsSuccess(response.items));
      });
  };
}
