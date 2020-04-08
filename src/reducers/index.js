import { combineReducers } from 'redux';
import teamStatsReducer, { teamStatsInitialState } from './team_stats';

export const initialState = {
  teamStats: teamStatsInitialState
}

const reducers = combineReducers({
  teamStats: teamStatsReducer
})

const rootReducer = (state = initialState, action) => {
  return reducers(state, action)
}
export default rootReducer