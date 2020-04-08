import * as types from '../../../types/teamStats';

export const setTeamStats = (stats) => ({
  type: types.SET_TEAM_STATS,
  stats,
});
