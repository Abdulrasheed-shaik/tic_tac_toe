import React, { useState } from 'react';
import Board from './Board';
import CategorySelection from './CategorySelection';
import GameOver from './GameOver';
import { getRandomEmoji, checkWinner } from '../utils/gameLogic';
import { DEFAULT_CATEGORIES } from '../utils/emojiCategories';

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [categories, setCategories] = useState([null, null]);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerMoves, setPlayerMoves] = useState([[], []]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState(null);
  const [scores, setScores] = useState([0, 0]);

  const getCurrentEmoji = () => {
    if (!categories[currentPlayer]) return null;
    return getRandomEmoji(categories[currentPlayer]);
  };

  const handleCellClick = (index) => {
    if (winner !== null || board[index] !== null) return;

    const emoji = getCurrentEmoji();
    if (!emoji) return;

    const newMove = {
      player: currentPlayer,
      emoji,
      position: index,
      timestamp: Date.now(),
    };

    const newPlayerMoves = [...playerMoves];
    newPlayerMoves[currentPlayer] = [...newPlayerMoves[currentPlayer], newMove];

    let newBoard = [...board];
    newBoard[index] = newMove;

    if (newPlayerMoves[currentPlayer].length > 3) {
      const oldestMove = newPlayerMoves[currentPlayer][0];
      newBoard[oldestMove.position] = null;
      newPlayerMoves[currentPlayer] = newPlayerMoves[currentPlayer].slice(1);
    }

    setBoard(newBoard);
    setPlayerMoves(newPlayerMoves);

    const winResult = checkWinner(newBoard, currentPlayer);
    if (winResult) {
      setWinner(currentPlayer);
      setWinningLine(winResult);
      setScores((prev) => {
        const newScores = [...prev];
        newScores[currentPlayer] += 1;
        return newScores;
      });
    } else {
      setCurrentPlayer((prev) => (prev === 0 ? 1 : 0));
    }
  };

  const handleCategorySelect = (categoryIndex, playerIndex) => {
    const newCategories = [...categories];
    newCategories[playerIndex] = DEFAULT_CATEGORIES[categoryIndex];
    setCategories(newCategories);

    if (newCategories[0] && newCategories[1]) {
      setGameStarted(true);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayerMoves([[], []]);
    setCurrentPlayer(winner === null ? 0 : winner);
    setWinner(null);
    setWinningLine(null);
  };

  const newGame = () => {
    resetGame();
    setCategories([null, null]);
    setGameStarted(false);
  };

  if (!gameStarted) {
    return (
      <CategorySelection
        onSelect={handleCategorySelect}
        categories={DEFAULT_CATEGORIES}
        selectedCategories={categories}
      />
    );
  }

  return (
    <div className="flex flex-col items-center">
      {winner === null ? (
        <div className="mb-6 text-center">
          <p className="text-lg font-medium mb-2">
            Player {currentPlayer + 1}'s Turn
          </p>
          <div className="flex justify-center items-center h-12 w-12 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-xl animate-pulse">
            {getCurrentEmoji()}
          </div>
        </div>
      ) : (
        <GameOver
          winner={winner}
          onReset={resetGame}
          onNewGame={newGame}
          scores={scores}
        />
      )}

      <Board
        board={board}
        onClick={handleCellClick}
        currentPlayer={currentPlayer}
        winningLine={winningLine}
        categories={categories}
      />

      <div className="mt-6 flex justify-between w-full">
        <div className="text-center p-3 bg-purple-100 rounded-lg">
          <p className="font-medium">Player 1</p>
          <p className="text-2xl">{scores[0]}</p>
          <div className="mt-2 flex gap-1">
            {playerMoves[0].map((move, idx) => (
              <span key={idx} className="text-lg">{move.emoji}</span>
            ))}
          </div>
        </div>
        <div className="text-center p-3 bg-pink-100 rounded-lg">
          <p className="font-medium">Player 2</p>
          <p className="text-2xl">{scores[1]}</p>
          <div className="mt-2 flex gap-1">
            {playerMoves[1].map((move, idx) => (
              <span key={idx} className="text-lg">{move.emoji}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
