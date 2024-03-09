import { ListService } from './services/list.service';
import { LIST_PROVIDER } from '../providers/services/list-service.provider';

export const provideListService = () => [
  {
    provide: LIST_PROVIDER,
    useClass: ListService,
  },
];

export const provideApplication = () => [...provideListService()];
