import { SOF_API, GH_API } from './consts';

export const getSofQuestions = () => fetch(SOF_API);

export const getGhRepos = () => fetch(GH_API);
