import React, { Component } from 'react';
import './App.css';
import ToDoCollector from "./ToDoCollector";

class App extends Component {
  render() {
    const rawDataModule = require('./rawData');

    return (
      <div className="App">
        <ToDoCollector rawData={rawDataModule}/>
      </div>
    );
  }
}

export default App;
