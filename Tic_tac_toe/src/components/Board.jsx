import React from 'react';
import Cell from './Cell';

const Board = ({ 
  board, 
  onClick, 
  currentPlayer,
  winningLine,
  categories
}) => {
  return (
    <div className="grid grid-cols-3 gap-2 w-full max-w-xs mx-auto">
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          onClick={() => onClick(index)}
          isWinning={winningLine?.includes(index) ?? false}
          currentPlayer={currentPlayer}
          categoryColors={[
            categories[0]?.color || 'purple',
            categories[1]?.color || 'pink'
          ]}
        />
      ))}
    </div>
  );
};

export default Board;
