import React, { Component } from 'react';
 import './App.css';
import Board from './Board'
import axios from "axios";

class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      id:1,
      board: [
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "]
        ],
      state: "new",
      mines: 9
    };
  }

  loadSampleGame = event =>{
    axios
      .get("https://minesweeper-api.herokuapp.com/games")
      .then(response=>{
        let newState = response.data
        this.setState = (newState)
      })
    

  render() {
    let rows=this.state



    return (
      <div className="App">
        <head><link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/> </head>
          <h1>MINESWEEPER</h1>
          <main >
            <table className="playarea">
              <tr>
                <td colSpan={this.state.board[0].length}>
                
                {/* change this to a new game option after completion */}
                {/* <button onclick={this.loadSampleGame}>Load Sample Game</button>
                <p> you are playing game # {this.state.id}</p> */}
                </td>
              </tr>
              <tr> {this.state.board[0]}              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
            </table>
          </main>
      </div>
    );
  }
}

export default App;
