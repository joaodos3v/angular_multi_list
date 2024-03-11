import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../../../domain/models/item.model';
import { ItemsRepository } from '../../../../providers/repositories/items-repository.provider';
import { CharacterResponse } from '../interfaces/character-response.interface';

@Injectable()
export class NarutoAPIItemsRepository implements ItemsRepository {
  http: HttpClient = inject(HttpClient);

  url: string = 'https://narutodb.xyz/api/character';
  items: Item[] = [];

  constructor() {}

  getById(): Promise<Item[]> {
    throw new Error('Method not implemented.');
  }

  getItems(limit: number): Observable<Item[]> {
    return this.http.get<CharacterResponse>(this.url).pipe(
      map((response) => {
        return response.characters.map((char) => ({
          id: char.id,
          name: char.name,
          description: char.uniqueTraits?.join('; '),
          imageURL: char.images.pop() || '',
        }));
      }),
      tap((result) => console.log(result)),
      catchError((err) => {
        // Poderia tratar para um erro "de acordo com as regras da minha app"
        throw new Error(err);
      })
    );
  }
}
