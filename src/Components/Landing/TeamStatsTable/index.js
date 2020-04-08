import React from 'react';
import { connect } from 'react-redux';
import { syncTeamStats } from '../../../actions/teamStats';

class LandingTable extends React.Component {
  componentDidMount() {
    const { syncTeamStats, year, category } = this.props;
    syncTeamStats(year, category);
  }
  render() {
    return <div>hello</div>;
  }
}

const mapStateToProps = ({ teamStats: { year, category } }) => ({
  year,
  category,
});

export default connect(mapStateToProps, { syncTeamStats })(LandingTable);
