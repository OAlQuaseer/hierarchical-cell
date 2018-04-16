import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TreeView from './cmp1/index';

const tree = [{
  title: "howdy",
  cmuLevel: "4",
  childNodes: [
    { title: "bobby", cmuLevel: "3" },
    {
      title: "suzie", cmuLevel: "3", childNodes: [
        {
          title: "puppy", cmuLevel: "2", childNodes: [
            { title: "dog house", cmuLevel: "1" }
          ]
        },
        { title: "cherry tree", cmuLevel: "2" }
      ]
    }
  ]
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>--------------------------------------------</p>
        <div style={{ margin: 'auto', width: '100%' }}>
          <h2>HTML Table</h2>

          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Allocation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td><TreeView data={tree}></TreeView> </td>
                <td>sthn%</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td><TreeView data={tree}></TreeView> </td>
                <td>sthn%</td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
    );
  }
}

export default App;

