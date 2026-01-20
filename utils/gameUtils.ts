import { BalloonType, LevelConfig, Operator } from '../types';
import { COLORS } from '../constants';

export const generateMathProblem = (operators: Operator[], range: [number, number]): { question: string; answer: number } => {
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const min = range[0];
  const max = range[1];

  let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  let num2 = Math.floor(Math.random() * (max - min + 1)) + min;

  // Adjust for subtraction to avoid negatives
  if (operator === '-') {
    if (num1 < num2) [num1, num2] = [num2, num1];
  }
  
  // Adjust for multiplication to keep numbers reasonable if not explicitly small
  if (operator === '*') {
     // For multiplication, use slightly smaller numbers from the range to avoid huge results
     const limit = Math.ceil(Math.sqrt(max * 2)); 
     num1 = Math.min(num1, limit);
     num2 = Math.min(num2, limit);
  }

  let answer = 0;
  switch (operator) {
    case '+': answer = num1 + num2; break;
    case '-': answer = num1 - num2; break;
    case '*': answer = num1 * num2; break;
    case '/': answer = Math.floor(num1 / num2); break; // Not used in config, but good for safety
  }

  return { question: `${num1} ${operator} ${num2}`, answer };
};

export const getRandomBalloonType = (specialChance: number): BalloonType => {
  if (Math.random() > specialChance) return BalloonType.NORMAL;
  
  const rand = Math.random();
  if (rand < 0.25) return BalloonType.GOLD;
  if (rand < 0.5) return BalloonType.BOMB;
  if (rand < 0.75) return BalloonType.FREEZE;
  return BalloonType.STAR;
};

export const getBalloonColor = (type: BalloonType): string => {
  switch (type) {
    case BalloonType.GOLD: return COLORS.GOLD;
    case BalloonType.BOMB: return COLORS.BOMB;
    case BalloonType.FREEZE: return COLORS.FREEZE;
    case BalloonType.STAR: return COLORS.STAR;
    default: return COLORS.NORMAL[Math.floor(Math.random() * COLORS.NORMAL.length)];
  }
};