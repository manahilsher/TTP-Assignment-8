import React, { Component } from 'react';
import { Table } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'green',
      numRows: 1,
      numColumns: 1,
      rows: [{ columns: [{ color: 'gray' }] }]
    };
  }

  // sets the color from what is chosen on the dropdown
  setCurrentColor = (e) => {
    this.setState({ currentColor: e.target.value });
  };

  // adds a new row
  addRow = (e) => {
    let newRows = this.state.rows.slice();
    newRows.push({ columns: [] });
    let count = 0;
    while (count !== this.state.numColumns) {
      newRows[newRows.length - 1].columns.push({ color: 'gray' });
      count++;
    }
    this.setState({ numRows: this.state.numRows + 1, rows: newRows });
  };

  // adds a new column
  addColumn = (e) => {
    let newRows = this.state.rows;
    newRows.forEach((row) => {
      row.columns.push({ color: 'gray' });
    });
    this.setState({ numColumns: this.state.numColumns + 1, rows: newRows });
  };

  render() {
    return (
      <>
        {/* dropdown menu*/}
        <form>
          <p>
            <label>Select list</label>
            <select
              id="color-select"
              onChange={this.setCurrentColor}
              value={this.state.currentColor}
            >
              <option value="#008000">Green</option>
              <option value="#FF0000">Red</option>
              <option value="#0000FF">Blue</option>
              <option value="#FFFF00">Yellow</option>
            </select>
          </p>
        </form>
        <input type="submit" value="Add Row" onClick={this.addRow}></input>
        <input
          type="submit"
          value="Add Column"
          onClick={this.addColumn}
        ></input>
        <Table
          numRows={this.state.numRows}
          rows={this.state.rows}
          color={this.state.currentColor}
        />
      </>
    );
  }
}

export default App;
