# Emoji Tic Tac Toe

A fun, animated twist on the classic Tic Tac Toe game, built with React and Vite!

## Features

- 🎨 Choose your emoji category (Animals, Food, Sports, and more)
- ✨ Only 3 emojis per player on the board at a time — your oldest emoji vanishes when you place a fourth!
- 🏆 Win by lining up 3 of your emojis (horizontal, vertical, or diagonal)
- 🚀 Animated starfield background for a cosmic feel
- Responsive, modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v16 or newer recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Abdulrasheed-shaik/tic_tac_toe.git
   cd Tic_tac_toe
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:
```sh
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Project Structure

- `src/components/` — React components (Board, Cell, Game, etc.)
- `src/utils/` — Game logic and emoji categories
- `src/assets/` — Static assets
- `public/` — Public files (favicon, etc.)

## Credits

- Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Starfield animation using [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/)

---