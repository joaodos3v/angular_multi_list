import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { Item } from '../../domain/models/item.model';

export interface List {
  getItems(offset?: number, limit?: number): Observable<Item[]>;
}

export const LIST_PROVIDER = new InjectionToken<List>('LIST_PROVIDER');
