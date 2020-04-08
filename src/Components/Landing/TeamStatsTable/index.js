import React from 'react';
import { connect } from 'react-redux';
import { syncTeamStats } from '../../../actions/teamStats';
import { TeamStatsTable } from './styles';

class LandingTable extends React.Component {
  componentDidMount() {
    const { syncTeamStats, year, category } = this.props;
    syncTeamStats(year, category);
  }
  render() {
    const { stats } = this.props;
    return <TeamStatsTable stats={stats} />;
  }
}

const mapStateToProps = ({ teamStats: { year, category, stats } }) => ({
  year,
  category,
  stats,
});

export default connect(mapStateToProps, { syncTeamStats })(LandingTable);
