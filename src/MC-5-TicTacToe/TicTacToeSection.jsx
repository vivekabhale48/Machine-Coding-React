import { useState } from 'react';
import { useTicTacToeWinner } from './hook/useTicTacToeWinner';

export const TicTacToeSection = ({ size }) => {
  let initialBoard = Array.from({ length: size }, (_, index) => {
    return Array(size).fill(null);
  });

  const [board, setBoard] = useState(initialBoard);
  const [isXTurn, setIsXTurn] = useState(true);
  const { isWinner } = useTicTacToeWinner(board, size);

  function handleClick(rowIndex, colIndex) {
    console.log(rowIndex, colIndex);
    if (board[rowIndex][colIndex] !== null) return;
    let updatedBoard = JSON.parse(JSON.stringify(board));
    updatedBoard[rowIndex][colIndex] = isXTurn ? 'X' : 'O';
    setBoard(updatedBoard);
    setIsXTurn((prev) => !prev);
  }

  return (
    <div>
      {board.map((row, rowIndex) => {
        return (
          <div className="flex" key={rowIndex}>
            {row.map((col, colIndex) => (
              <button
                disabled={isWinner ? true : false}
                onClick={() => handleClick(rowIndex, colIndex)}
                className="w-[50px] m-1 h-[50px] border bg-[#eee] flex justify-center items-center cursor-pointer"
                key={colIndex}
              >
                {col}
              </button>
            ))}
          </div>
        );
      })}

      {isWinner === 'O' || isWinner === 'X' ? (
        <h1>Winner is {isWinner}</h1>
      ) : (
        <h1>{isWinner}</h1>
      )}
    </div>
  );
};
