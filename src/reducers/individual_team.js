import * as types from '../types/individualTeam';

export const individualTeamDefaultState = {
  year: '2018',
  sortBy: 'alpha',
  category: 'per_game',
  stats: [],
};

const individualTeamReducer = (state = individualTeamDefaultState, action) => {
  switch (action.type) {
    case types.SET_INDIVIDUAL_TEAM_STATS: {
      const { stats } = action;
      return { ...state, stats };
    }
    case types.CHANGE_INDIVIDUAL_TEAM_YEAR: {
      const { year } = action;
      return { ...state, year };
    }

    case types.CHANGE_INDIVIDUAL_TEAM_SORT_BY: {
      const { sortBy } = action;
      return { ...state, sortBy };
    }

    default: {
      return state;
    }
  }
};

export default individualTeamReducer;