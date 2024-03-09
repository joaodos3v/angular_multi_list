import { LIST_PROVIDER } from '../providers/services/list-service.provider';
import { ListService } from './services/list.service';
import { SOURCE_PROVIDER } from '../providers/services/source-service.provider';
import { SourceService } from './services/source.service';

export const provideListService = () => [
  {
    provide: LIST_PROVIDER,
    useClass: ListService,
  },
  {
    provide: SOURCE_PROVIDER,
    useClass: SourceService,
  },
];

export const provideApplication = () => [...provideListService()];
