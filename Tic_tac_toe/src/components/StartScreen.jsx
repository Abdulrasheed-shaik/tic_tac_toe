import React from 'react'
import { Play } from 'lucide-react';

const StartScreen = ({onStart}) => {
  return (
    <div className="text-center animate-fade-in">
      <h2 className="text-4xl font-bold mb-6 animate-title">
        Welcome to
        <span className="block mt-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Emoji Tic Tac Toe
        </span>
      </h2>
      
      <p className="text-gray-600 mb-8 animate-description">
        A twisted version of the classic game where your emojis come and go!
      </p>
      
      <button
        onClick={onStart}
        className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-full overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-button"
      >
        <span className="relative flex items-center gap-2">
          Start Game
          <Play size={20} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </button>
      
      <div className="mt-12 space-y-6 text-left animate-features">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎮</span>
          <div>
            <h3 className="font-semibold mb-1">Choose Your Emojis</h3>
            <p className="text-gray-600 text-sm">Pick from fun categories like Animals, Food, or Sports!</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <span className="text-2xl">✨</span>
          <div>
            <h3 className="font-semibold mb-1">Vanishing Magic</h3>
            <p className="text-gray-600 text-sm">Your oldest emoji disappears when you place a fourth one!</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <span className="text-2xl">🏆</span>
          <div>
            <h3 className="font-semibold mb-1">Win in Style</h3>
            <p className="text-gray-600 text-sm">Match three of your emojis to claim victory!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartScreen