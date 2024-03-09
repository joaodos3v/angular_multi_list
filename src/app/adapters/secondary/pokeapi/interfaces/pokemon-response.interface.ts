import { PokemonSimplified } from './pokemon-simplified.interface';

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonSimplified[];
}
