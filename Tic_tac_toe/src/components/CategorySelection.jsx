import React from 'react';

const CategorySelection = ({ onSelect, categories, selectedCategories }) => {
  return (
    <div className="flex flex-col items-center text-white">
      <h2 className="text-2xl font-bold mb-6 animate-title">Select Emoji Categories</h2>

      {[0, 1].map((playerIndex) => (
        <div key={playerIndex} className="mb-10 w-full max-w-xl">
          <h3
            className={`text-lg font-semibold mb-3 ${
              playerIndex === 0 ? 'text-purple-400' : 'text-pink-400'
            }`}
          >
            Player {playerIndex + 1}
            {selectedCategories[playerIndex]
              ? `: ${selectedCategories[playerIndex].name}`
              : ''}
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {categories.map((category, categoryIndex) => {
              const isSelectedByPlayer = selectedCategories[playerIndex]?.name === category.name;
              const isSelectedByOther = selectedCategories[1 - playerIndex]?.name === category.name;

              return (
                <button
                  key={categoryIndex}
                  onClick={() => onSelect(categoryIndex, playerIndex)}
                  disabled={isSelectedByOther}
                  className={`
                    p-4 rounded-xl border-2 transition-all duration-300
                    ${isSelectedByPlayer
                      ? `border-${category.color}-400 bg-${category.color}-900 bg-opacity-30`
                      : 'border-gray-700 hover:border-gray-500 bg-gray-800'}
                    ${isSelectedByOther ? 'opacity-30 cursor-not-allowed' : ''}
                  `}
                >
                  <p className="font-semibold mb-2">{category.name}</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {category.emojis.slice(0, 4).map((emoji, i) => (
                      <span key={i} className="text-xl">{emoji}</span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {selectedCategories[0] && selectedCategories[1] && (
        <div className="animate-fade-in mt-6">
          <p className="text-center text-gray-300 mb-4">
            Both players have selected their categories!
          </p>
          <div className="flex justify-center">
            <button
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
            >
              Start Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySelection;
