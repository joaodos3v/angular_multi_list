import { InjectionToken } from '@angular/core';
import { Item } from '../../domain/models/item.model';

export interface List {
  getItems(offset?: number, limit?: number): Promise<Item[]>;
  random(): void;
}

export const LIST_PROVIDER = new InjectionToken<List>('LIST_PROVIDER');
