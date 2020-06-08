import React from 'react';
import '../App.css';

const TableCell = (props) => {
  return (
    <td
      style={{ backgroundColor: props.color }}
      //   changes color of the cell when clicked
      onClick={(e) => {
        e.target.style.backgroundColor = props.currentColor;
      }}
    ></td>
  );
};

export default TableCell;
