import { urlBuilder } from '../../../urlConfig';
import { createUrlForTeamStats } from './endpoints';
import axios from 'axios';

export const fetchTeamStats = (year, category) => {
  return axios.get(urlBuilder(createUrlForTeamStats(year, category)));
};
