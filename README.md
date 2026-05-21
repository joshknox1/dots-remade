# Dots Remade

A beautiful, premium browser-playable 6x6 dot connection game with multiple modes and accessibility features.

## Features
- **Rebranded Experience**: A clean, glassmorphic UI styled with smooth transitions.
- **Multiple Game Modes**:
  - **Moves Mode**: Classic gameplay with a 30-move limit.
  - **Timed Mode**: 90-second countdown. To let you plan, the timer remains paused until you touch your first dot!
  - **Endless Mode**: Play for as long as you want without limits.
- **Dark Mode**: Toggle between a standard Light theme and a premium dark-navy board background.
- **High Contrast Palette**: A dedicated accessibility color scheme to ensure dots are easily distinguishable.
- **Refined Aesthetics**: Added crisp black vector outlines and drop-shadows to dots for excellent visibility.
- **Touch & Powerup Icons**: Pure SVG icons for game powerups:
  - **Single Remove (2x)**: Tap a dot to clear it.
  - **Shuffle (1x)**: Shuffle the board layout.
  - **Clear Color (1x)**: Clear all dots of a selected color.

## How to Play
1. Click/tap and drag through adjacent dots of the same color.
2. Complete a loop (return to the starting dot) to form a box/rectangle. Doing so will clear all dots of that color on the board!
3. Release to clear the connected dots. New dots will drop from the top.

## How to Run
Simply open [index.html](index.html) directly in any modern web browser, or serve it locally:
```bash
# Python 3
python -m http.server 8080
```
Then navigate to `http://localhost:8080`.
