import React, { Component } from 'react';
import axios from 'axios';
import teamColors from '../../../assets/teamColors';

class Table extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { data } = await axios.get('http://localhost:5000/teams/stats/?category=per_game&year=2018');
    this.setState({ data });
  };
  render() {
    const { data } = this.state;
    if (!data) {
      return <div>Loading</div>;
    }
    return (
      <table style={{ paddingLeft: '100px' }}>
        <thead>
          <tr>
            <th style={{ color: 'white' }}>NBA Statistics</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ team_name: teamName, team_abbrev: abbrev, minutes_played: mp, field_goals: fg, field_goal_attempts: fga }) => {
            const textColor = teamColors[abbrev];
            return (
              <tr style={{ backgroundColor: 'rgb(189, 152, 247)' }}>
                <td style={{ color: '#000000', fontWeight: 'bold' }}>
                  {teamName}
                </td>
                <td style={{ color: '#000000', fontWeight: 'bold' }}>
                  {abbrev}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default Table;
