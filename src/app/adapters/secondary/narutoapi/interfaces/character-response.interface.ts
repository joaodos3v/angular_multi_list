import { Character } from './character.interface';

export interface CharacterResponse {
  characters: Character[];
  currentPage: number;
  pageSize: number;
  totalCharacters: number;
}
