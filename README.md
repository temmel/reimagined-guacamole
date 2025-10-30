# Hippo Race Game

A fun, interactive web-based racing game where you choose a hippo and race against AI opponents by answering animal trivia questions!

## How to Play

1. **Select Number of Players**: Choose 1-3 human players. Remaining hippos will be AI-controlled.

2. **Choose Your Hippo**: Each player selects from 4 unique hippos in turn order:
   - **Thunder**: Fast and steady (High speed, moderate bonus)
   - **Lightning**: High risk, high reward (Lower speed, highest bonus multiplier)
   - **Splash**: Consistent performer (Highest speed, lowest bonus)
   - **Bubbles**: Balanced all-arounder (Balanced stats)

3. **Answer Trivia Questions**:
   - Each player gets their **own unique question** during their turn
   - Players answer **sequentially** (Player 1, then Player 2, then Player 3)
   - All questions in a round have the same difficulty:
     - **Turn 1, 3, 5...** = All players get EASY questions (Ages 6-9)
     - **Turn 2, 4, 6...** = All players get HARD questions (Ages 10-13)
   - Answer choices are randomized each time

4. **Race to the Finish**:
   - All hippos move forward each turn
   - If you answer correctly, your hippo gets a speed boost based on its bonus multiplier
   - Wrong answers mean your hippo moves at base speed only
   - AI opponents move at their base speed with slight random variance

   - After all players have answered, **ALL hippos move simultaneously** (humans + AI)
   - Each hippo moves based on whether their player answered correctly

5. **Win the Race**: First hippo to reach the finish line wins!

## Game Features

- **Multiplayer Support**: 1-3 human players can play together on the same device
- **Turn-Based Gameplay**: Players answer the same question sequentially
- **4 Unique Hippos**: Each with distinct stats (Speed, Acceleration, Bonus Multiplier)
- **40+ Easy Questions**: Kid-friendly animal questions for ages 6-9
- **30+ Hard Questions**: Challenging animal trivia for ages 10-13
- **Alternating Difficulty**: Questions automatically alternate between easy and hard
- **Randomized Answers**: Answer choices are shuffled every time
- **Bonus Multiplier System**: Hard questions award 1.5x bonus on top of your hippo's bonus
- **Smart AI**: AI-controlled hippos compete fairly (50% accuracy)
- **Dynamic Racing**: Visual race track with real-time position updates
- **Beautiful UI**: Smooth animations, pulsing effects, and responsive design

## Installation & Setup

1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. No server or dependencies required!

## Files

- `index.html` - Main game structure
- `styles.css` - All styling and animations
- `game.js` - Game logic and functionality
- `README.md` - This file

## Strategy Tips

- **Speed vs Bonus**: Higher base speed means consistent progress, higher bonus multiplier means bigger rewards for correct answers
- **Know Your Trivia**: Easy questions are kid-friendly (ages 6-9), hard questions are more challenging (ages 10-13)
- **Choose Wisely**:
  - Pick **Lightning** or **Bubbles** if you're confident with hard questions (high bonus multipliers)
  - Pick **Splash** for consistent speed regardless of trivia knowledge
  - **Thunder** is a balanced option for mixed performance
- **Hard Question Rewards**: Every other question is hard and awards 1.5x bonus - perfect for hippos with high bonus multipliers!
- **Randomized Answers**: Pay attention! Answer order changes each time, so you can't memorize positions
- **Multiplayer Strategy**:
  - In a 3-player game, coordinate who picks which hippo
  - Each player gets different questions, so everyone has a fair chance
  - All players get the same difficulty level in each round (all easy or all hard)

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Technical Details

- Pure HTML5, CSS3, and vanilla JavaScript
- No frameworks or libraries required
- Responsive design works on desktop and tablet
- Mobile-friendly interface

## Future Enhancements

Potential features for future versions:
- Sound effects and background music
- More trivia questions and categories
- Multiplayer mode
- Custom race distances
- Power-ups and obstacles
- Leaderboard system

## Credits

Created as a fun educational game combining racing mechanics with trivia questions.

Enjoy the race!
