import React, { Component } from "react";
import axios from "axios";

class Table extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000");
    this.setState({ data });
  };
  render() {
    const { data } = this.state;
    console.log(data);
    if (!data) {
      return <div>Loading</div>;
    }
    return (
      <table style={{ paddingLeft: "100px" }}>
        <thead>
          <tr>
            <th>NBA Statistics</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ team_name: teamName, team_abbrev: abbrev }) => (
            <tr>
              <td>{teamName}</td>
              <td>{abbrev}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default Table;
