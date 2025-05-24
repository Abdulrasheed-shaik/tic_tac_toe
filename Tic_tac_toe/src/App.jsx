import React, { useState } from "react";
import { Info } from "lucide-react";
import HelpModal from "./components/HelpModal";
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import Starfield from "./components/StarField";

function App() {
  const [showHelp, setShowHelp] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="relative min-h-screen p-4 md:p-8 flex flex-col items-center justify-center overflow-hidden">
      <Starfield />

      <div className="max-w-xl w-full mx-auto z-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Emoji Tic Tac Toe
          </h1>
          <button
            onClick={() => setShowHelp(true)}
            className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
            aria-label="Help"
          >
            <Info size={20} />
          </button>
        </div>

        {!gameStarted ? (
          <StartScreen onStart={() => setGameStarted(true)} />
        ) : (
          <Game />
        )}
      </div>

      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
}

export default App;
