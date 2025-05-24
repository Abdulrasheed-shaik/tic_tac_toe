import React from 'react';

const Cell = ({ 
  value, 
  onClick, 
  isWinning,
  currentPlayer,
  categoryColors
}) => {
  const getBgColor = () => {
    if (isWinning) {
      return 'bg-yellow-200';
    }
    if (!value) {
      return 'bg-white hover:bg-gray-100';
    }
    return value.player === 0 
      ? `bg-${categoryColors[0]}-100` 
      : `bg-${categoryColors[1]}-100`;
  };

  return (
    <button
      className={`
        h-20 md:h-24 w-full rounded-xl flex items-center justify-center text-3xl md:text-4xl
        ${getBgColor()}
        ${isWinning ? 'animate-pulse shadow-md' : 'shadow-sm'}
        transition-all duration-300 ease-in-out
      `}
      onClick={onClick}
      disabled={value !== null}
    >
      {value && (
        <span className={`
          ${isWinning ? 'animate-bounce' : 'animate-emoji-appear'}
          transition-all duration-300
        `}>
          {value.emoji}
        </span>
      )}
    </button>
  );
};

export default Cell;
