import * as types from '../types/teamStats';
export const teamStatsInitialState = {
  year: '2018',
  sortBy: 'alpha',
  category: 'per_game',
  stats: [],
};

const teamStatsReducer = (state = teamStatsInitialState, action) => {
  switch (action.type) {
    case types.SET_TEAM_STATS: {
      const { stats } = action;
      console.log(stats)
      return { ...state, stats };
    }
    case types.CHANGE_TEAM_STATS_YEAR: {
      const { year } = action;
      return { ...state, year };
    }

    case types.CHANGE_TEAM_STATS_SORT_BY: {
      const { sortBy } = action;
      return { ...state, sortBy };
    }

    default: {
      return state;
    }
  }
};

export default teamStatsReducer;
