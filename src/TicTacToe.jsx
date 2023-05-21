import React, { useState, useEffect } from "react";
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

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [winCells, setWincells] = useState([]);
  const [status, setStatus] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {}, [gameOver]);

  const square = (i) => {
    return (
      <Square
        player={squares[i]}
        onClick={() => handleClick(i)}
        winner={winCells.includes(i)}
      />
    );
  };

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i] || calculateDraw(squares)) {
      return;
    }

    const newSquares = [...squares];
    newSquares[i] = isX ? "X" : "O";
    setSquares(newSquares);
    setIsX(!isX);

    if (calculateWinner(newSquares)) {
      const { winningPlayer, tiles } = calculateWinner(newSquares);
      setWincells(tiles);
      setStatus(`Winner is ${winningPlayer}`);
      setGameOver(true);
    } else if (calculateDraw(newSquares)) {
      setStatus("Draw!");
      setGameOver(true);
    } else {
      setStatus(`Next Player: ${!isX ? "X" : "O"}`);
    }
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setIsX(true);
    setWincells([]);
    setGameOver(false);
    setStatus("");
  };

  return (
    <div className="gameboard">
      <div className="status">{status}</div>
      <div className="board">
        <div className="row">
          {square(0)}
          {square(1)}
          {square(2)}
        </div>
        <div className="row">
          {square(3)}
          {square(4)}
          {square(5)}
        </div>
        <div className="row">
          {square(6)}
          {square(7)}
          {square(8)}
        </div>
        {gameOver && (
          <button className="button" onClick={() => restartGame()}>
            Restart!
          </button>
        )}
      </div>
    </div>
  );
}
