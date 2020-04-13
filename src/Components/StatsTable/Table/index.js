import React from 'react';
import { Table, TableBody, TableData, TableRow } from './styles';
import TableHeader from '../TableHeader';

const StatsTable = ({ stats, headers }) => (
  <div>
    <Table>
      <TableHeader headers={headers} />
      <TableBody>
        {stats.map((statsObj) => {
          return (
            <TableRow>
              {Object.keys(statsObj).map((keyName) => {
                let final_val = statsObj[keyName];
                if (typeof final_val == 'number') {
                  final_val =
                    Math.round((final_val + Number.EPSILON) * 100) / 100;
                }
                return <TableData>{final_val}</TableData>;
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </div>
);

export default StatsTable;
