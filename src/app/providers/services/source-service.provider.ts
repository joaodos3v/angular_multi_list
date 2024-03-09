import { InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Source {
  usePokeAPI: BehaviorSubject<boolean>;
  toggleUsePokeAPI(usePokeAPI: boolean): void;
}

export const SOURCE_PROVIDER = new InjectionToken<Source>('SOURCE_PROVIDER');
