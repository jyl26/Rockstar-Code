export type Tier = 'STAR' | 'SUPERSTAR';

export interface GeneratedMission {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  location: string;
  vibe: string;
  estimatedDifficulty: 'EASY' | 'MEDIUM' | 'HARD' | 'INSANE';
  author: string;
  likes: number;
  plays: number;
  downloads?: number;
  reward?: number;
}

export interface User {
  id: string;
  username: string;
  tier: Tier;
  creationsCount: number;
  earnings: number;
}
