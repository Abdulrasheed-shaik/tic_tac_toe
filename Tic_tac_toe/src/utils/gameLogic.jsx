// Get a random emoji from the given category
export const getRandomEmoji = (category) => {
  const randomIndex = Math.floor(Math.random() * category.emojis.length);
  return category.emojis[randomIndex];
};

// Winning patterns (rows, columns, diagonals)
const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6]            
];

// Check if there's a winner
export const checkWinner = (board, currentPlayer) => {
  // Get positions of current player's emojis
  const playerPositions = board
    .map((cell, index) => (cell && cell.player === currentPlayer ? index : -1))
    .filter(pos => pos !== -1);

  // Check if any winning pattern is satisfied
  for (const pattern of winPatterns) {
    if (pattern.every(pos => playerPositions.includes(pos))) {
      return pattern;
    }
  }

  return null;
};
