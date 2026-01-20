import { LevelConfig } from './types';

export const COLORS = {
  NORMAL: ['#ef4444', '#3b82f6', '#22c55e', '#a855f7', '#f97316', '#ec4899'], // Red, Blue, Green, Purple, Orange, Pink
  GOLD: '#eab308',
  BOMB: '#1f2937', // Dark Gray
  FREEZE: '#06b6d4', // Cyan
  STAR: '#f43f5e', // Rose
};

// 20 Levels configuration
export const LEVELS: LevelConfig[] = [
  // Levels 1-3: Addition 1-10
  { level: 1, operators: ['+'], numberRange: [1, 5], spawnRate: 2500, speedMultiplier: 0.3, maxBalloons: 10, specialChance: 0 },
  { level: 2, operators: ['+'], numberRange: [1, 9], spawnRate: 2300, speedMultiplier: 0.35, maxBalloons: 15, specialChance: 0.1 },
  { level: 3, operators: ['+'], numberRange: [2, 10], spawnRate: 2100, speedMultiplier: 0.4, maxBalloons: 20, specialChance: 0.1 },
  
  // Levels 4-6: Addition 1-20
  { level: 4, operators: ['+'], numberRange: [5, 15], spawnRate: 2000, speedMultiplier: 0.45, maxBalloons: 20, specialChance: 0.15 },
  { level: 5, operators: ['+'], numberRange: [5, 20], spawnRate: 1900, speedMultiplier: 0.5, maxBalloons: 25, specialChance: 0.15 },
  { level: 6, operators: ['+'], numberRange: [10, 20], spawnRate: 1800, speedMultiplier: 0.55, maxBalloons: 25, specialChance: 0.2 },

  // Levels 7-9: Subtraction
  { level: 7, operators: ['-'], numberRange: [5, 15], spawnRate: 2000, speedMultiplier: 0.5, maxBalloons: 20, specialChance: 0.2 },
  { level: 8, operators: ['-'], numberRange: [10, 20], spawnRate: 1900, speedMultiplier: 0.55, maxBalloons: 25, specialChance: 0.2 },
  { level: 9, operators: ['-'], numberRange: [10, 30], spawnRate: 1800, speedMultiplier: 0.6, maxBalloons: 30, specialChance: 0.25 },

  // Levels 10-12: Add + Sub
  { level: 10, operators: ['+', '-'], numberRange: [5, 25], spawnRate: 1700, speedMultiplier: 0.65, maxBalloons: 30, specialChance: 0.25 },
  { level: 11, operators: ['+', '-'], numberRange: [10, 40], spawnRate: 1600, speedMultiplier: 0.7, maxBalloons: 35, specialChance: 0.25 },
  { level: 12, operators: ['+', '-'], numberRange: [10, 50], spawnRate: 1500, speedMultiplier: 0.75, maxBalloons: 40, specialChance: 0.3 },

  // Levels 13-15: Multiplication
  { level: 13, operators: ['*'], numberRange: [2, 5], spawnRate: 2200, speedMultiplier: 0.6, maxBalloons: 20, specialChance: 0.2 },
  { level: 14, operators: ['*'], numberRange: [2, 9], spawnRate: 2000, speedMultiplier: 0.7, maxBalloons: 25, specialChance: 0.25 },
  { level: 15, operators: ['*'], numberRange: [3, 10], spawnRate: 1800, speedMultiplier: 0.8, maxBalloons: 30, specialChance: 0.3 },

  // Levels 16-18: Mixed
  { level: 16, operators: ['+', '-', '*'], numberRange: [5, 20], spawnRate: 1400, speedMultiplier: 0.9, maxBalloons: 40, specialChance: 0.3 },
  { level: 17, operators: ['+', '-', '*'], numberRange: [5, 30], spawnRate: 1300, speedMultiplier: 1.0, maxBalloons: 45, specialChance: 0.3 },
  { level: 18, operators: ['+', '-', '*'], numberRange: [5, 50], spawnRate: 1200, speedMultiplier: 1.1, maxBalloons: 50, specialChance: 0.35 },

  // Level 19: Hard
  { level: 19, operators: ['+', '-', '*'], numberRange: [10, 99], spawnRate: 1000, speedMultiplier: 1.2, maxBalloons: 60, specialChance: 0.4 },

  // Level 20: Boss
  { level: 20, operators: ['+', '-', '*'], numberRange: [10, 50], spawnRate: 800, speedMultiplier: 1.3, maxBalloons: 100, specialChance: 0.5, isBoss: true },
];

export const MAX_LIVES = 3;