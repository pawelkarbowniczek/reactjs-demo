import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddForm from './AddForm';
// import graph from 'fb-react-sdk';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('elo');
        // graph.setAccessToken('628295867356289|PYuxH-OY_Qh7m0e6v6k2x5mtujA');
        // var options = {
        //     timeout:  3000
        //     , pool:     { maxSockets:  Infinity }
        //     , headers:  { connection:  "keep-alive" }
        // };
        //
        // graph
        //     .setOptions(options)
        //     .get("403156189820397",{fields:"picture"}, function(err, res) {
        //         console.log(res); // { id: '4', name: 'Mark Zuckerberg'... }
        //     });
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. helo.
        </p>
          <AddForm/>
      </div>
    );
  }
}

export default App;
