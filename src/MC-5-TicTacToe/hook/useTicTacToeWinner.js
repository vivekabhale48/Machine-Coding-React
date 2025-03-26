import { useState, useEffect } from 'react';

export const useTicTacToeWinner = (board, size) => {
  const [isWinner, setIsWinner] = useState(null);

  useEffect(() => {
    checkRowWinner();
  }, [board]);

  const checkRowWinner = () => {
    //check for row;
    for (let i = 0; i < size; i++) {
      let symbol = board[i][0];
      if (symbol) {
        let winner = true;
        for (let j = 1; j < size; j++) {
          if (symbol !== board[i][j]) {
            winner = false;
            break;
          }
        }
        if (winner) {
          setIsWinner(symbol);
          return; // Stop further checks if a winner is found
        }
      }
    }

    //check for columns:
    for (let j = 0; j < size; j++) {
      let symbol = board[0][j];
      if (symbol) {
        let winner = true;
        for (let i = 1; i < size; i++) {
          if (symbol !== board[i][j]) {
            winner = false;
            break;
          }
        }
        if (winner) {
          setIsWinner(symbol);
          return;
        }
      }
    }

    //check for main diagonal:
    let symbol = board[0][0];
    let winner = true;
    if (symbol) {
      for (let i = 0; i < size; i++) {
        if (symbol !== board[i][i]) {
          winner = false;
          break;
        }
      }
      if (winner) {
        setIsWinner(symbol);
        return;
      }
    }

    //cross diagonal
    symbol = board[0][size-1];
    winner = true;
    if(symbol) {
      for(let i=1; i<size; i++) {
        if(symbol !== board[i][size-i-1]) {
          winner = false;
          break;
        }
      }
      if(winner){
        setIsWinner(symbol);
        return;
      }
    }

    if(board.flat().every(ele => ele !== null)) {
      setIsWinner('Match Drawn');
    }
  };

  return { isWinner };
};
