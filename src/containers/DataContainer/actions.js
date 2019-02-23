import {
  GET_SOF_POSTS_REQUEST,
  GET_SOF_POSTS_SUCCESS,
  GET_SOF_POSTS_ERROR,
  GET_GH_REPOS_REQUEST,
  GET_GH_REPOS_SUCCESS,
  GET_GH_REPOS_ERROR,
} from './consts';
import { getSofQuestions, getGhRepos } from '../../network';

// Action creators

export const getSofPostsRequests = () => ({
  type: GET_SOF_POSTS_REQUEST,
});

export const getSofPostsSuccess = sofQuestions => ({
  type: GET_SOF_POSTS_SUCCESS,
  sofQuestions,
});

export const getGhReposRequests = () => ({
  type: GET_GH_REPOS_REQUEST,
});

export const getGhReposSuccess = ghRepos => ({
  type: GET_GH_REPOS_SUCCESS,
  ghRepos,
});

// Thunks

export function sendStackOverflowRequest() {
  return dispatch => {
    dispatch(getSofPostsRequests());

    getSofQuestions()
      .then(response => response.json())
      .then(response => {
        dispatch(getSofPostsSuccess(response.items));
      });
  };
}

export function sendGithubRequest() {
  return dispatch => {
    dispatch(getGhReposRequests());

    getGhRepos()
      .then(response => response.json())
      .then(response => {
        dispatch(getGhReposSuccess(response.slice(0, 15)));
      });
  };
}
