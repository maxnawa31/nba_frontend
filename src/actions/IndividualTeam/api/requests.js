import { urlBuilder } from '../../../urlConfig';
import { createUrlForIndividualTeam } from './endpoints';
import axios from 'axios';

export const fetchIndividualTeam = (year, teamId) => {
  return axios.get(urlBuilder(createUrlForIndividualTeam(year, teamId)));
};
