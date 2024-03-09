import { ITEMS_REPOSITORY_PROVIDER } from '../../../providers/repositories/items-repository.provider';
import { LIST_PROVIDER } from '../../../providers/services/list-service.provider';
import { NarutoAPIItemsRepository } from './repositories/narutoapi-items.repository';

export const provideNarutoAPIItemsRepository = () => [
  {
    provide: ITEMS_REPOSITORY_PROVIDER,
    useClass: NarutoAPIItemsRepository,
  },
];

export const provideNarutoAPI = () => [...provideNarutoAPIItemsRepository()];
