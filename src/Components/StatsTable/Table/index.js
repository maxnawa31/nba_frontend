import React, { Component } from 'react';
import { Table, TableBody, TableData, TableRow } from './styles';
import TableHeader from '../TableHeader';

const StatsTable = ({ stats, headers }) => (
  <Table>
    <TableHeader headers={headers} />
    <TableBody>
      {stats.map((statsObj) => {
        return (
          <TableRow>
            {Object.keys(statsObj).map((keyName) => {
              return <TableData>{statsObj[keyName]}</TableData>;
            })}
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);

export default StatsTable;
