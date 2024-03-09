import { ITEMS_REPOSITORY_PROVIDER } from '../../../providers/repositories/items-repository.provider';
import { PokeAPIItemsRepository } from './repositories/pokeapi-items.repository';

export const providePokeAPIItemsRepository = () => [
  {
    provide: ITEMS_REPOSITORY_PROVIDER,
    useClass: PokeAPIItemsRepository,
  },
];

export const providePokeAPI = () => [...providePokeAPIItemsRepository()];
