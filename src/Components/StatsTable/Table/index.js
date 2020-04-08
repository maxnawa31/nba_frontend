import React, { Component } from 'react';
import { Table, TableBody, TableData, TableRow } from './styles';
import teamColors from '../../../assets/teamColors';

const StatsTable = ({ stats }) => (
  <Table>
    <TableBody>
      {stats.map((statsObj) => {
        return (
          <TableRow>
            {Object.keys(statsObj).map((keyName) => {
              console.log(keyName);
              return <TableData>{statsObj[keyName]}</TableData>;
            })}
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);

export default StatsTable;
