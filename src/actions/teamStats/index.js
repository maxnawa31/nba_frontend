import { teamStatsFetchTeamStats } from './api';
import { setTeamStats } from './state/actionCreators';

export const syncTeamStats = (year, category) => async (dispatch) => {
  let teamStats = await teamStatsFetchTeamStats(year, category);
  if (teamStats) {
    dispatch(setTeamStats(teamStats));
  }
};