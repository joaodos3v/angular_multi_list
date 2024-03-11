import { Injectable, inject } from '@angular/core';
import { Item } from '../../../../domain/models/item.model';
import { ItemsRepository } from '../../../../providers/repositories/items-repository.provider';
import { Observable, catchError, forkJoin, map, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonResponse } from '../interfaces/pokemon-response.interface';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable()
export class PokeAPIItemsRepository implements ItemsRepository {
  http: HttpClient = inject(HttpClient);

  url: string = 'https://pokeapi.co/api/v2/pokemon/';

  getById(): Promise<Item[]> {
    throw new Error('Method not implemented.');
  }

  getItems(offset: number, limit: number): Observable<Item[]> {
    return this.http.get<PokemonResponse>(this.url).pipe(
      switchMap((response) => {
        return forkJoin(response.results.map((pokemon) => this.http.get<Pokemon>(pokemon.url)));
      }),
      map((responses) => {
        return responses.map((pokemonDetails) => ({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          description: pokemonDetails.abilities.map((ability) => ability.ability.name).join(' + '),
          imageURL: pokemonDetails.sprites.front_default,
        }));
      }),
      catchError((err) => {
        // Poderia tratar para um erro "de acordo com as regras da minha app"
        throw new Error(err);
      })
    );
  }
}
