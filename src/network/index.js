import { SOF_API, GH_API } from './consts';

export const getSofQuestions = () =>
  fetch(
    `${SOF_API}?order=desc&sort=activity&site=stackoverflow&filter=!9Z(-wzu0T`,
  );

export const getSofDetails = questionId =>
  fetch(`${SOF_API}/${questionId}?order=desc&sort=activity&site=stackoverflow`);

export const getGhRepos = () => fetch(`${GH_API}/repositories`);

export const getGhDetails = url => fetch(`${GH_API}/repos/${url} `);
