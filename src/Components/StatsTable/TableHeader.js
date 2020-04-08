import React from 'react';
import { TableRow, TableHeader, Thead } from './Table/styles';

const Header = ({ headers }) => (
  <Thead>
    <TableRow>
      {headers.map((headerText) => (
        <TableHeader>{headerText}</TableHeader>
      ))}
    </TableRow>
  </Thead>
);

export default Header;
