import React from 'react';

const GameOver = ({ 
  winner, 
  onReset, 
  onNewGame,
  scores
}) => {
  return (
    <div className="mb-6 text-center animate-fade-in">
      <h2 className="text-xl font-bold mb-2">
        Player {winner + 1} Wins! 🎉
      </h2>
      <p className="text-gray-600 mb-4">
        Score: {scores[0]} - {scores[1]}
      </p>
      <div className="flex gap-3 justify-center">
        <button
          onClick={onReset}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Play Again
        </button>
        <button
          onClick={onNewGame}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
        >
          New Game
        </button>
      </div>
    </div>
  );
};

export default GameOver;
