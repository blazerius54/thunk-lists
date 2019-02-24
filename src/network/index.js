import { SOF_API, GH_API } from './consts';

export const getSofQuestions = () => fetch(SOF_API);

export const getGhRepos = () => fetch(`${GH_API}/repositories`);

export const getGhDetails = url => fetch(`${GH_API}/repos/${url} `);
