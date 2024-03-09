import { InjectionToken } from '@angular/core';

export interface Source {
  changeSource(usePokeAPI: boolean): void;
}

export const SOURCE_PROVIDER = new InjectionToken<Source>('SOURCE_PROVIDER');
