import { Injectable, inject } from '@angular/core';
import { Item } from '../../domain/models/item.model';
import { List } from '../../providers/services/list-service.provider';
import { ITEMS_REPOSITORY_PROVIDER } from '../../providers/repositories/items-repository.provider';

@Injectable()
export class ListService implements List {
  itemsRepository = inject(ITEMS_REPOSITORY_PROVIDER);

  async getItems(offset: number = 0, limit: number = 50): Promise<Item[]> {
    return await this.itemsRepository.getItems(offset, limit);
  }

  random(): void {
    throw new Error('Method not implemented.');
  }
}
