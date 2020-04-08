import React from 'react';
import { connect } from 'react-redux';
import { syncTeamStats } from '../../../actions/teamStats';
import { TeamStatsTable } from './styles';
import { teamStatsTableHeaderData } from '../../../assets/TableHeaderData/teamStats';
import {
  formattedTeamStats,
  teamStatsYearSelector,
  teamStatsCategorySelector,
} from '../../../selectors/teamStats';

class LandingTable extends React.Component {
  componentDidMount() {
    const { syncTeamStats, year, category } = this.props;
    syncTeamStats(year, category);
  }
  render() {
    const { stats } = this.props;
    return <TeamStatsTable headers={teamStatsTableHeaderData} stats={stats} />;
  }
}

const mapStateToProps = (state) => ({
  year: teamStatsYearSelector(state),
  category: teamStatsCategorySelector(state),
  stats: formattedTeamStats(state),
});

export default connect(mapStateToProps, { syncTeamStats })(LandingTable);
