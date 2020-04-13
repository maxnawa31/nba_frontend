import { fetchIndividualTeamStats } from './api';
import { setIndividualTeamStats } from './state/actionCreators';

export const syncIndividualTeamStats = (year, teamId) => async (dispatch) => {
  let individualTeamStats = await fetchIndividualTeamStats(year, teamId);
  if (individualTeamStats) {
    dispatch(setIndividualTeamStats(individualTeamStats));
  }
};
