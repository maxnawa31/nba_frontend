import { fetchIndividualTeam } from './requests';

export const fetchIndividualTeamStats = async (year, teamId) => {
  try {
    const { data } = await fetchIndividualTeam(year, teamId);
    return data
  } catch (err) {
    console.log(err);
  }
};
