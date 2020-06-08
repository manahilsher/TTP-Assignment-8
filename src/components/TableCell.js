import React from 'react';
import '../App.css';

const TableCell = (props) => {
  return (
    <td
      style={{ backgroundColor: 'gray' }}
      onClick={(e) => {
        console.log(e.target.style.backgroundColor);
        e.target.style.backgroundColor = props.color;
        console.log(e.target.style.backgroundColor);
      }}
    ></td>
  );
};

export default TableCell;
