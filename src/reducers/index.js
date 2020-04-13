import { combineReducers } from 'redux';
import teamStatsReducer, { teamStatsInitialState } from './team_stats';
import indivdualTeamReducer, {
  individualTeamDefaultState,
} from './individual_team';

export const initialState = {
  teamStats: teamStatsInitialState,
  individualTeam: individualTeamDefaultState,
};

const reducers = combineReducers({
  teamStats: teamStatsReducer,
  individualTeam: indivdualTeamReducer,
});

const rootReducer = (state = initialState, action) => {
  return reducers(state, action);
};
export default rootReducer;
