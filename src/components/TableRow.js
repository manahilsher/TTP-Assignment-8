import React from 'react';
import '../App.css';
import { TableCell } from '/';

const TableRow = (props) => {
  return (
    <tr>
      {props.columns.map((column) => {
        return <TableCell color={column.color} currentColor={props.color} />;
      })}
    </tr>
  );
};

export default TableRow;
