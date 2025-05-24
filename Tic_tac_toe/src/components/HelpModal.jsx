import React from 'react';
import { X } from 'lucide-react';

const HelpModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full max-h-[90vh] ">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">How to Play</h2>
            <button 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="space-y-4">
            <section>
              <h3 className="font-semibold text-lg mb-2">Game Setup</h3>
              <p>Each player selects an emoji category before the game begins.</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Gameplay</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Players take turns placing emojis on the 3×3 grid.</li>
                <li>On your turn, you'll receive a random emoji from your selected category.</li>
                <li>The goal is to create a line of 3 of your emojis (horizontal, vertical, or diagonal).</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Vanishing Emoji Rule</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Each player can only have a maximum of 3 emojis on the board at any time.</li>
                <li>When you place your 4th emoji, your oldest emoji automatically disappears.</li>
                <li>This makes the game dynamic as the board constantly changes!</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Winning</h3>
              <p>The first player to form a line of 3 of their emojis wins the game!</p>
              <p className="mt-2">Unlike regular Tic Tac Toe, draws are impossible because the board never fills completely.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
