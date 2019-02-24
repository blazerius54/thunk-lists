import {
  GET_GH_DETAILS_REQUEST,
  GET_GH_DETAILS_SUCCESS,
  GET_GH_DETAILS_ERROR,
  GET_SOF_DETAILS_REQUEST,
  GET_SOF_DETAILS_SUCCESS,
  GET_SOF_DETAILS_ERROR,
} from './consts';

import { getGhDetails, getSofDetails } from '../../network';

export const getSofDetailsRequests = () => ({
  type: GET_SOF_DETAILS_REQUEST,
});

export const getSofDetailsSuccess = sofDetails => ({
  type: GET_SOF_DETAILS_SUCCESS,
  sofDetails,
});

export const getSfDetailsError = () => ({
  type: GET_SOF_DETAILS_ERROR,
});

export const getGhDetailsRequests = () => ({
  type: GET_GH_DETAILS_REQUEST,
});

export const getGhDetailsSuccess = ghRepoDetails => ({
  type: GET_GH_DETAILS_SUCCESS,
  ghRepoDetails,
});

export const getGhDetailsError = () => ({
  type: GET_GH_DETAILS_ERROR,
});

// Thunks

export function sendSofDetailsRequest(url) {
  return dispatch => {
    dispatch(getSofDetailsRequests());

    getSofDetails(url)
      .then(response => response.json())
      .then(response => {
        dispatch(getSofDetailsSuccess(response.items[0]));
      })
      .catch(err => dispatch(getSfDetailsError));
  };
}

export function sendGhDetailsRequest(url) {
  return dispatch => {
    dispatch(getGhDetailsRequests());

    getGhDetails(url)
      .then(response => response.json())
      .then(response => {
        dispatch(getGhDetailsSuccess(response));
      })
      .catch(err => dispatch(getGhDetailsError));
  };
}
