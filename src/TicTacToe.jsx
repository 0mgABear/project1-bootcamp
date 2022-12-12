import React from "react";
import "./TicTacToe.css";

const Square = (props) => {
  return (
    <div
      className={"square" + (props.winner ? " winner" : "")}
      onClick={props.onClick}
    >
      {props.player}
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        //return just the winning tiles , then have a separate function to determine the winner
        winningPlayer: squares[a],
        tiles: [a, b, c],
      };
    }
  }
  return "";
};

const calculateDraw = (squares) => {
  if (!squares.includes(null)) {
    return true;
  }
};

export class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      isX: true,
      winCells: [],
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    //set player
    //set everything : all the squares, turn, set the winner
    const tiles = calculateWinner(squares).tiles; //a,b,c of the//lagging behind
    console.log(squares);
    if (calculateWinner(squares) || squares[i] || calculateDraw(squares)) {
      if (calculateWinner(squares)) {
        const winningTiles = calculateWinner(squares).tiles;
        this.setState({ winCells: winningTiles }, () => {
          console.log(this.state.winCells);
        });
      }
      return;
    }
    squares[i] = this.state.isX ? "X" : "O"; //duplicate
    this.setState({ squares: squares, isX: !this.state.isX });
  }

  restartGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      isX: true,
      winCells: [],
    });
  };

  renderSquare(i) {
    return (
      <Square
        player={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        winner={this.state.winCells.includes(i)}
      />
    );
  }

  render() {
    const winConditions = calculateWinner(this.state.squares);
    const draw = calculateDraw(this.state.squares);
    const winner = winConditions.winningPlayer;

    let status;
    if (winner) {
      status = "Winner is: " + winner;
    } else if (draw) {
      status = <div className="draw">Game Over! Draw</div>;
    } else {
      status = "Next Player: " + (this.state.isX ? "X" : "O");
    }

    return (
      <div className="gameboard">
        <div className="status">{status}</div>
        <div className="board">
          <div className="row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          {(winner || draw) && (
            <button className="button" onClick={this.restartGame}>
              Restart!
            </button>
          )}
        </div>
      </div>
    );
  }
}
