import React from 'react';
import '../App.css';
import TableCell from './TableCell';

const TableRow = (props) => {
  return (
    <tr>
      <TableCell color={props.color}></TableCell>
    </tr>
  );
};

export default TableRow;
