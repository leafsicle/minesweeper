import React, { Component } from 'react';
import './App.css';
import Row from './Row'
// import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      id:"",
      board: [
        ["00","01","02","03","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""]
        ],
      state: "new",
      mines: 9
    };
  }

  // loadSampleGame = (event) =>{
  //   axios
  //     .post("https://minesweeper-api.herokuapp.com/games", {difficulty:0})
  //     .then(response=>{
  //       this.setState(response.data)
  //     })
  // }    

  render() {
    return (
      <div className="App">
        <head><link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/></head>
          <h1>MINESWEEPER</h1>
          <table className="playarea">
              <tr>
                {/* this tells the top row how many columns wide it should be  */}
                <td colSpan={this.state.board.length}>
                <button onClick={this.loadSampleGame}>Load Sample Game</button>
                <p>you are playing game # {this.state.id} </p>  </td>
              </tr> 
              <Row position= {0} square={this.state.board[0][0]}/>
              <Row position= {1} square={this.state.board[0][1]}/>
              <Row position= {2} square={this.state.board[0][2]}/>
              <Row position= {3} square={this.state.board[0][3]}/>
              <Row position= {4} square={this.state.board[0][4]}/>
              <Row position= {5} square={this.state.board[0][5]}/>
              <Row position= {6} square={this.state.board[0][6]}/>
              <Row position= {7} square={this.state.board[0][7]}/>
            <tr> 
              <td>{this.state.board[1][0]}</td>
              <td>{this.state.board[1][1]}</td>
              <td>{this.state.board[1][2]}</td>
              <td>{this.state.board[1][3]}</td>
              <td>{this.state.board[1][4]}</td>
              <td>{this.state.board[1][5]}</td>
              <td>{this.state.board[1][6]}</td>
              <td>{this.state.board[1][7]}</td>
            </tr>
            <tr> 
              <td>{this.state.board[2][0]}</td>
              <td>{this.state.board[2][1]}</td>
              <td>{this.state.board[2][2]}</td>
              <td>{this.state.board[2][3]}</td>
              <td>{this.state.board[2][4]}</td>
              <td>{this.state.board[2][5]}</td>
              <td>{this.state.board[2][6]}</td>
              <td>{this.state.board[2][7]}</td>
            </tr>
            <tr> 
              <td>{this.state.board[3][0]}</td>
              <td>{this.state.board[3][1]}</td>
              <td>{this.state.board[3][2]}</td>
              <td>{this.state.board[3][3]}</td>
              <td>{this.state.board[3][4]}</td>
              <td>{this.state.board[3][5]}</td>
              <td>{this.state.board[3][6]}</td>
              <td>{this.state.board[3][7]}</td>
            </tr>
            <tr> 
              <td>{this.state.board[4][0]}</td>
              <td>{this.state.board[4][1]}</td>
              <td>{this.state.board[4][2]}</td>
              <td>{this.state.board[4][3]}</td>
              <td>{this.state.board[4][4]}</td>
              <td>{this.state.board[4][5]}</td>
              <td>{this.state.board[4][6]}</td>
              <td>{this.state.board[4][7]}</td>
            </tr>
            <tr> 
              <td>{this.state.board[5][0]}</td>
              <td>{this.state.board[5][1]}</td>
              <td>{this.state.board[5][2]}</td>
              <td>{this.state.board[5][3]}</td>
              <td>{this.state.board[5][4]}</td>
              <td>{this.state.board[5][5]}</td>
              <td>{this.state.board[5][6]}</td>
              <td>{this.state.board[5][7]}</td>
            </tr>
            <tr> 
              <td>{this.state.board[6][0]}</td>
              <td>{this.state.board[6][1]}</td>
              <td>{this.state.board[6][2]}</td>
              <td>{this.state.board[6][3]}</td>
              <td>{this.state.board[6][4]}</td>
              <td>{this.state.board[6][5]}</td>
              <td>{this.state.board[6][6]}</td>
              <td>{this.state.board[6][7]}</td>
            </tr>
            <tr> 
              <td>{this.state.board[7][0]}</td>
              <td>{this.state.board[7][1]}</td>
              <td>{this.state.board[7][2]}</td>
              <td>{this.state.board[7][3]}</td>
              <td>{this.state.board[7][4]}</td>
              <td>{this.state.board[7][5]}</td>
              <td>{this.state.board[7][6]}</td>
              <td>{this.state.board[7][7]}</td>
            </tr>
          </table> 
      </div>
    );
  }
}

export default App;
