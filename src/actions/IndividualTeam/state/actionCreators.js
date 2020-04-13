import * as types from '../../../types/individualTeam';

export const setIndividualTeamStats = (stats) => ({
  type: types.SET_INDIVIDUAL_TEAM_STATS,
  stats,
});
