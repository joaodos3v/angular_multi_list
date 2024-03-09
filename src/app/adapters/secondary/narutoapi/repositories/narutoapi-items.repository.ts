import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../../../domain/models/item.model';
import { ItemsRepository } from '../../../../providers/repositories/items-repository.provider';
import { CharacterResponse } from '../interfaces/character-response.interface';

@Injectable()
export class NarutoAPIItemsRepository implements ItemsRepository {
  url: string = 'https://narutodb.xyz/api/character';
  items: Item[] = [];

  constructor(private http: HttpClient) {}

  getById(): Promise<Item[]> {
    throw new Error('Method not implemented.');
  }

  async getItems(limit: number): Promise<Item[]> {
    const response = await firstValueFrom(this.http.get<CharacterResponse>(this.url));

    return response.characters.map((char) => ({
      id: char.id,
      name: char.name,
      description: char.uniqueTraits?.join('; '),
      imageURL: char.images.pop() || '',
    }));
  }
}
