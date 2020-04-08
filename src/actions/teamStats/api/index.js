import { fetchTeamStats } from './requests';

export const teamStatsFetchTeamStats = async (year, category) => {
  try {
    const { data } = await fetchTeamStats(year, category);
    return data;
  } catch (err) {
    console.log(err);
  }
};
