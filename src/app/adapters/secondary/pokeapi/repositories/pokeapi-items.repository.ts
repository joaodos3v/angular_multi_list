import { Injectable, inject } from '@angular/core';
import { Item } from '../../../../domain/models/item.model';
import { ItemsRepository } from '../../../../providers/repositories/items-repository.provider';
import { firstValueFrom } from 'rxjs';
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

  async getItems(offset: number, limit: number): Promise<Item[]> {
    let pokemons: Item[] = [];

    const response = await firstValueFrom(this.http.get<PokemonResponse>(this.url));

    response.results.map(async (pokemon) => {
      const pokemonDetails = await firstValueFrom(this.http.get<Pokemon>(pokemon.url));

      pokemons.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        description: pokemonDetails.abilities.map((ability) => ability.ability.name).join(' + '),
        imageURL: pokemonDetails.sprites.front_default,
      });
    });

    return pokemons;
  }
}
