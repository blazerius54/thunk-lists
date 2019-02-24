import {
  GET_GH_DETAILS_REQUEST,
  GET_GH_DETAILS_SUCCESS,
  GET_GH_DETAILS_ERROR,
  GET_SOF_DETAILS_ERROR,
  GET_SOF_DETAILS_REQUEST,
  GET_SOF_DETAILS_SUCCESS,
} from './consts';

import { getGhDetails } from '../../network';


export const getGhDetailsRequests = () => ({
  type: GET_GH_DETAILS_REQUEST,
});

export const getGhDetailsSuccess = ghRepoDetails => ({
  type: GET_GH_DETAILS_SUCCESS,
  ghRepoDetails,
});

// Thunks

export function sendGhDetailsRequest(url) {
  return dispatch => {
    dispatch(getGhDetailsRequests());

    getGhDetails(url)
      .then(response => response.json())
      .then(response => {
        dispatch(getGhDetailsSuccess(response));
      });
  };
}
