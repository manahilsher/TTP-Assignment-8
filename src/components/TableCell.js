import React from 'react';
import '../App.css';

const TableCell = (props) => {
  return (
    <td
      style={{ backgroundColor: props.color }}
      onClick={(e) => {
        e.target.style.backgroundColor = props.currentColor;
      }}
    ></td>
  );
};

export default TableCell;
