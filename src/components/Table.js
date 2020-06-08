import React from 'react';
import '../App.css';
import { TableRow } from '/';

const Table = (props) => {
  return (
    <>
      <table>
        <tbody id="main-grid">
          {props.rows.map((row) => {
            return (
              <TableRow
                color={props.color}
                numColumns={row.numColumns}
                columns={row.columns}
              ></TableRow>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
