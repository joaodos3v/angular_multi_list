import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Source } from '../../providers/services/source-service.provider';

export const USE_POKE_API_KEY = 'usePokeAPI';

@Injectable()
export class SourceService implements Source {
  usePokeAPI = new BehaviorSubject<boolean>(Boolean(localStorage.getItem(USE_POKE_API_KEY)));

  private changeApplicationProvider(usePokeAPI: boolean) {
    if (!usePokeAPI) {
      localStorage.removeItem(USE_POKE_API_KEY);
    } else {
      localStorage.setItem(USE_POKE_API_KEY, JSON.stringify(usePokeAPI));
    }

    window.location.reload();
  }

  toggleUsePokeAPI(usePokeAPI: boolean) {
    this.usePokeAPI.next(usePokeAPI);
    this.changeApplicationProvider(usePokeAPI);
  }
}
