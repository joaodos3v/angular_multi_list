import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { Item } from '../../domain/models/item.model';

export interface ItemsRepository {
  getById(): Promise<Item[]>;
  getItems(offset: number, limit: number): Observable<Item[]>;
}

export const ITEMS_REPOSITORY_PROVIDER = new InjectionToken<ItemsRepository>('ITEMS_REPOSITORY_PROVIDER');
