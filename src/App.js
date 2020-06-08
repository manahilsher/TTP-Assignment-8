import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'gray'
    };
  }

  setCurrentColor = (e) => {
    this.setState({ currentColor: e.target.value });
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
