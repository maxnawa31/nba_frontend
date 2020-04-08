import { createSelector } from 'reselect';
import { teamStatsTableHeaderData } from '../assets/TableHeaderData/teamStats';

export const teamStatsSelector = ({ teamStats: { stats } }) => stats;

export const teamStatsYearSelector = ({ teamStats: { year } }) => year;

export const teamStatsCategorySelector = ({ teamStats: { category } }) =>
  category;

export const formattedTeamStats = createSelector(
  teamStatsSelector,
  (teamStats) => {
    let res = [];
    teamStats.forEach((teamObj) => {
      let newTeamObj = {};
      for (let key of teamStatsTableHeaderData) {
        newTeamObj[key] = teamObj[key];
      }
      res.push(newTeamObj);
    });
    return res;
  }
);
