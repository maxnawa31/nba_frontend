import { createSelector } from 'reselect';
import { individualTeamStatsHeaders } from '../assets/IndividualTeam/playerStats';

export const individualTeamStatsSelector = ({ individualTeam: { stats } }) =>
  stats;

export const individualTeamYearSelector = ({ individualTeam: { year } }) =>
  year;

export const individualTeamCategorySelector = ({
  individualTeam: { category },
}) => category;

export const formattedIndividualTeamStats = createSelector(
  individualTeamStatsSelector,
  (stats) => {
    let res = [];
    stats.forEach((playerObj) => {
      let newPlayerObj = {};
      for (let key of individualTeamStatsHeaders) {
        newPlayerObj[key] = playerObj[key];
      }
      res.push(newPlayerObj);
    });
    return res;
  }
);
