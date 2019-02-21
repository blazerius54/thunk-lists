import { GET_SOF_POSTS_REQUEST, GET_SOF_POSTS_SUCCESS, GET_SOF_POSTS_ERROR } from './consts';

export const getSofPostsRequests = () => ({
  type: GET_SOF_POSTS_REQUEST,
});

export function myThunkActionCreator() {
  return (dispatch, getState) => {
    dispatch({type : "GET_SOF_POSTS_REQUEST"});

    fetch("https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&filter=!9Z(-wzu0T")
      .then(
        response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}),
        error => dispatch({type : "REQUEST_FAILED", error : error})
      );
  };
}