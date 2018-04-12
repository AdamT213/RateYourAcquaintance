import React, { Component } from 'react';
import './App.css'; 
import FindPersonForm from './Components/FindPersonForm'; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">RateYourAcquaintance</h1>
        <p className="App-intro"> 
        The day of Reckoning has come!
        </p> 
        <FindPersonForm />
      </div>
    );
  }
}

export default App;
