export type GameScreen = 
  | 'SPLASH' 
  | 'HOME' 
  | 'LEVEL_SELECT' 
  | 'GAME' 
  | 'PAUSE' 
  | 'LEVEL_COMPLETE' 
  | 'GAME_OVER' 
  | 'VICTORY';

export type Operator = '+' | '-' | '*' | '/';

export enum BalloonType {
  NORMAL = 'NORMAL',
  GOLD = 'GOLD',   // Bonus points
  BOMB = 'BOMB',   // Don't pop!
  FREEZE = 'FREEZE', // Slow motion
  STAR = 'STAR',   // Double points
}

export interface BalloonEntity {
  id: string;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100 (0 is top)
  speed: number;
  type: BalloonType;
  question: string;
  answer: number;
  color: string;
  scale: number;
  isPopped: boolean;
}

export interface LevelConfig {
  level: number;
  operators: Operator[];
  numberRange: [number, number]; // [min, max]
  spawnRate: number; // ms between spawns
  speedMultiplier: number; // Base fall speed
  maxBalloons: number; // Total balloons to clear to win
  specialChance: number; // 0-1 probability
  isBoss?: boolean;
}

export interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  life: number;
}