import React, { Component } from 'react';
import { Table } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'gray',
      numRows: 1,
      numColumns: 1,
      rows: [],
      columns: [{ color: 'gray' }]
    };
  }

  setCurrentColor = (e) => {
    this.setState({ currentColor: e.target.value });
  };

  addRow = (e) => {
    let newRows = this.state.rows.slice();
    newRows.push({ color: this.state.currentColor });
    console.log(newRows);
    this.setState({ numRows: this.state.numRows + 1, rows: newRows });
  };

  removeRow = (e) => {
    if (this.state.numRows > 0) {
      this.setState({ numRows: this.state.numRows - 1 });
    }
  };

  render() {
    return (
      <>
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
          value="Remove Row"
          onClick={this.removeRow}
        ></input>
        <Table numRows={this.state.numRows} rows={this.state.rows} />
      </>
    );
  }
}

export default App;

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
