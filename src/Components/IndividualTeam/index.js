import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IndividualTeamStatsTable } from './styles';
import { formattedPlayerStatsHeaders } from '../../assets/IndividualTeam/playerStats';
import { syncIndividualTeamStats } from '../../actions/IndividualTeam';
import { formattedIndividualTeamStats } from '../../selectors/individualTeam';

class IndividualTeam extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id, year },
      },
      syncIndividualTeamStats,
    } = this.props;
    syncIndividualTeamStats(year, id);
  }

  render() {
    const { stats } = this.props;

    return (
      <IndividualTeamStatsTable
        stats={stats}
        headers={formattedPlayerStatsHeaders}
      ></IndividualTeamStatsTable>
    );
  }
}

const mapStateToProps = (state) => ({
  stats: formattedIndividualTeamStats(state),
});
export default connect(mapStateToProps, { syncIndividualTeamStats })(
  IndividualTeam
);
