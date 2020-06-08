import React from 'react';
import '../App.css';
import TableRow from './TableRow';

const Table = (props) => {
  return (
    <>
      <table>
        <tbody id="main-grid">
          {props.rows.map((row) => {
            console.log(row);
            return <TableRow color={props.color}></TableRow>;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
