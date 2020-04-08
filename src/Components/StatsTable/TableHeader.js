import React from 'react';
import { TableRow, TableHeader, Thead } from './Table/styles';

const Header = (headers) => (
  <Thead>
    {headers.map((headerText) => (
      <TableRow>
        <TableHeader>{headerText}</TableHeader>
      </TableRow>
    ))}
  </Thead>
);

export default Header;
